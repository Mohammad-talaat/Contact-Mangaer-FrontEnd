import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonsComponent } from './buttons/buttons.component';
import { FlexBoxComponent } from './flex-box/flex-box.component';

const routes: Routes = [
  {path:'buttons', component:ButtonsComponent},
  {path:'flexbox', component:FlexBoxComponent},
  {path:'**', redirectTo:'buttons'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
