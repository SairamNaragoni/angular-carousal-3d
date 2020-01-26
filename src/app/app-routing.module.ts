import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomCarousalComponent } from './custom-carousal/custom-carousal.component';
import { CarousalTwoComponent } from './carousal-two/carousal-two.component';

const routes: Routes = [
  { path: 'custom', component: CustomCarousalComponent },
  { path:'demo',component:CarousalTwoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }