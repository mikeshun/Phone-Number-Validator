import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhoneNumberValidatorRoutingModule } from './phone-number-validator-routing.module';
import { PhoneNumberValidatorComponent } from './pages/phone-number-validator/phone-number-validator.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PhoneNumberValidatorComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,

    
    PhoneNumberValidatorRoutingModule
  ]
})
export class PhoneNumberValidatorModule { }
