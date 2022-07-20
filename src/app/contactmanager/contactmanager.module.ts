import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactmanagerAppComponent } from './contactmanager-app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { FormsModule } from '@angular/forms';
import { Routes , RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'', component:ContactmanagerAppComponent,
children:[
  {path:'',component:MainContentComponent}
]},
  {path:'**',redirectTo:''}


];

@NgModule({
  declarations: [
    ContactmanagerAppComponent,
    ToolbarComponent,
    MainContentComponent,
    SidenavComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    AngularMaterialModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class ContactmanagerModule { }