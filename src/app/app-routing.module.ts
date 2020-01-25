import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomCarousalComponent } from './custom-carousal/custom-carousal.component';

const routes: Routes = [
  { path: 'custom', component: CustomCarousalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }