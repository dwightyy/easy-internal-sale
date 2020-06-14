import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandpageComponent } from './components/landpage/landpage.component';


const routes: Routes = [
  { path: '', component: LandpageComponent },
  { path: 'home', component: LandpageComponent },
  { path: 'landpage', component: LandpageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
