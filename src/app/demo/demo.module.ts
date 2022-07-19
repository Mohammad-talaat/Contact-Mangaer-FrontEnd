import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { ButtonsComponent } from './buttons/buttons.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { FlexBoxComponent } from './flex-box/flex-box.component';


@NgModule({
  declarations: [
    ButtonsComponent,
    FlexBoxComponent
  ],
  imports: [
    CommonModule,
    DemoRoutingModule,
    AngularMaterialModule
  ]
})
export class DemoModule { }
