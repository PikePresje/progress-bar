import {NgModule} from '@angular/core'; 
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button'; 

@NgModule({
  exports: [ 
    MatButtonModule,  
    FlexLayoutModule 
  ]
})
export class MaterialExtendedModule {}
