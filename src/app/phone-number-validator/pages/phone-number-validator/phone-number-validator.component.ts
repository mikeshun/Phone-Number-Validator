import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmBoxInitializer, DialogLayoutDisplay } from '@costlydeveloper/ngx-awesome-popup';
import { CountriesInterface } from 'src/app/shared/models/countries-interface.model';
import { ValidateInterface } from 'src/app/shared/models/validate-interface.model';
import { PhoneNumberValidatorService } from '../../services/phone-number-validator.service';


@Component({
  selector: 'app-phone-number-validator',
  templateUrl: './phone-number-validator.component.html',
  styleUrls: ['./phone-number-validator.component.scss']
})
export class PhoneNumberValidatorComponent implements OnInit {

  item = {} as ValidateInterface
  myForm = {} as FormGroup
  mItems = {} as CountriesInterface
  mmItems:any

  
 
  constructor( 
    private fb: FormBuilder,
    private countriesServ: PhoneNumberValidatorService) { 
      
    }

  ngOnInit(): void {
    this.buildForm();
    this.getCountryCodes()
  }

  
  buildForm() {
    this.myForm = this.fb.group(
      {
        PhoneNumber: ['', [Validators.required]],
        Country_Code: [''],
      },
    
    );
  }

  onSave(){
    var formRequest : ValidateInterface = this.myForm.value

    this.item.PhoneNumber = formRequest.PhoneNumber;
    this.item.Country_Code = formRequest.Country_Code;
    this.item.Access_Key = "eb588dbf70cb81df1c8d374269db9d18"

    this.countriesServ.sendNumber(this.item).subscribe(
      (res: any) => {
        if (res.success || res.valid) {

          const alertBox = new ConfirmBoxInitializer();
          alertBox.setMessage("Great! your number was successfully submitted");
          alertBox.setButtonLabels('Okay');
      
       
          alertBox.setConfig({
            LayoutType: DialogLayoutDisplay.SUCCESS 
          });
      
          alertBox.openConfirmBox$().subscribe(resp => {
    
            console.log('Clicked button response: ', resp);
          });
        
          console.log('You can continue ')
        } else{

          const alertBox = new ConfirmBoxInitializer();
          alertBox.setMessage(res?.error?.info );
          alertBox.setButtonLabels('Okay');
      
        
          alertBox.setConfig({
            LayoutType: DialogLayoutDisplay.DANGER 
          });
      
        
          alertBox.openConfirmBox$().subscribe(resp => {
         
            console.log('Clicked button response: ', resp);
          });

        }
       
      }, (error) => {
        console.log('System error. Contact  Administrator')
      }
    )
    this.myForm.reset()
  }

  
  getCountryCodes(){
    this.countriesServ.fetchCountryCodes().subscribe(
      p =>{
        this.mmItems = p
        console.log(p)
       
      }
    )
  }

}
