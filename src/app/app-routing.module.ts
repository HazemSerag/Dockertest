import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HazemComponent } from './components/hazem/hazem.component';
import { OlegComponent } from './components/oleg/oleg.component';
import { ZeinabComponent } from './components/zeinab/zeinab.component';

const routes: Routes = [
  { 
    path: '',
    redirectTo: '/hazem', 
    pathMatch: 'full' 
  },
  {
    path:'hazem',
    component:HazemComponent
  },
  {
    path:'oleg',
    component:OlegComponent
  },
  {
    path:'zeinab',
    component:ZeinabComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
