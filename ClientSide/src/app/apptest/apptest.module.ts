import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent } from './child/child.component';
import { ChildeditComponent } from './childedit/childedit.component';



@NgModule({
  declarations: [ChildComponent, ChildeditComponent],
  imports: [
    CommonModule
  ],
  exports:[
    ChildComponent,
    ChildeditComponent
  ]
})
export class ApptestModule { }