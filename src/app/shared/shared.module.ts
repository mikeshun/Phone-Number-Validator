import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';




@NgModule({
  declarations: [],
  imports: [
    MaterialModule,
    CommonModule,
    FlexLayoutModule,
    
  
  ],
  exports: [
    MaterialModule,
    CommonModule,
    FlexLayoutModule,
  
 
  ]
})
export class SharedModule { }
