import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core'; 
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxProgressBarComponent } from './ngx-progress-bar.component';



@NgModule({
  declarations: [
    NgxProgressBarComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule
  ],
  exports: [
    NgxProgressBarComponent
  ]
})
export class NgxProgressBarModule { }
