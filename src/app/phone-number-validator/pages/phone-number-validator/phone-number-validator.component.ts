import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmBoxInitializer, DialogLayoutDisplay } from '@costlydeveloper/ngx-awesome-popup';
import { NgxSpinnerService } from 'ngx-spinner';
import { CountriesInterface } from 'src/app/shared/models/countries-interface.model';
import { ValidateInterface } from 'src/app/shared/models/validate-interface.model';
import { PhoneNumberValidatorService } from '../../services/phone-number-validator.service';


@Component({
  selector: 'app-phone-number-validator',
  templateUrl: './phone-number-validator.component.html',
  styleUrls: ['./phone-number-validator.component.scss']
})
export class PhoneNumberValidatorComponent implements OnInit {

  validations = {} as ValidateInterface
  myForm = {} as FormGroup
  countries! : CountriesInterface[]
 

  

  
 
  constructor( 
    private spinner: NgxSpinnerService,
    private fb: FormBuilder,
    private validatorService: PhoneNumberValidatorService) { 
      
    }

  ngOnInit(): void {

  
   


    this.buildForm();
    this.myForm
    this.getCountryCodes()
  }

  
  buildForm() {
    this.myForm = this.fb.group(
      {
        PhoneNumber: ['',  [Validators.required,  Validators.pattern("^[0-9]*$")]],
        Country_Code: [''],
      },
    
    );
  }

  get f() { return this.myForm.controls; }


  onSave(){

   
    var formRequest : ValidateInterface = this.myForm.value

    this.validations.PhoneNumber = formRequest.PhoneNumber;
    this.validations.Country_Code = formRequest.Country_Code;
    this.validations.Access_Key = "eb588dbf70cb81df1c8d374269db9d18"

    this.validatorService.sendNumber(this.validations).subscribe(
      (res: any) => {
      
        if (res.success || res.valid) {

          const alertBox = new ConfirmBoxInitializer();
          alertBox.setMessage("Great! your number is valid and has been submitted");
          alertBox.setButtonLabels('Okay');
      
       
          alertBox.setConfig({
            LayoutType: DialogLayoutDisplay.SUCCESS 
          });
      
          alertBox.openConfirmBox$().subscribe(resp => {
    
            console.log('Clicked button response: ', resp);
          });
        
          console.log('You can continue ')
        }else if(!res.success || res.invalid){

          const alertBox = new ConfirmBoxInitializer();
          alertBox.setMessage(res?.error?.info + " \n Can't be Submittted!!"  );
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
    this.validatorService.fetchCountryCodes().subscribe(
      (p:any) =>{
        this.countries = p
        console.log(p)
       
      }
    )
  }

}
