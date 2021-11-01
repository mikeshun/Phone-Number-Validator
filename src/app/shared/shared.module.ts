import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxSpinnerModule } from "ngx-spinner";



@NgModule({
  declarations: [],
  imports: [
    MaterialModule,
    CommonModule,
    FlexLayoutModule,
    NgxSpinnerModule
    
  
  ],
  exports: [
    MaterialModule,
    CommonModule,
    NgxSpinnerModule,
    FlexLayoutModule,
  
 
  ]
})
export class SharedModule { }
