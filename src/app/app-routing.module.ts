import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PizzasComponent } from './pizzas/pizzas.component';

const routes: Routes = [
  {
    path: '',
    redirectTo:'pizzas',
    pathMatch: 'full'
  },
  {
    path: 'pizzas',
    component:PizzasComponent
  },
  {
    path: 'about',
    component:AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
