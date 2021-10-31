import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhoneNumberValidatorComponent } from './pages/phone-number-validator/phone-number-validator.component';

const routes: Routes = [
  {
    path: '',
    component: PhoneNumberValidatorComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhoneNumberValidatorRoutingModule { }
