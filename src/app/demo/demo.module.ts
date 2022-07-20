import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { ButtonsComponent } from './buttons/buttons.component';
import { FlexBoxComponent } from './flex-box/flex-box.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularMaterialModule } from '../angular-material/angular-material.module';


@NgModule({
  declarations: [
    ButtonsComponent,
    FlexBoxComponent
  ],
  imports: [
    CommonModule,
    DemoRoutingModule,
    AngularMaterialModule,
    FlexLayoutModule
  ]
})
export class DemoModule { }
