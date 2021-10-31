import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'validate',
    loadChildren: () => import('./phone-number-validator/phone-number-validator.module').then(m => m.PhoneNumberValidatorModule)
  }, 
  {
    path: '',
    redirectTo: 'validate',
    pathMatch : 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
