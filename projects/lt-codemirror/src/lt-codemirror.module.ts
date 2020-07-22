import { NgModule } from '@angular/core';
import { LtCodemirrorComponent } from './lt-codemirror.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LtCodemirrorComponent],
  exports: [LtCodemirrorComponent]
})
export class LtCodemirrorModule { }
