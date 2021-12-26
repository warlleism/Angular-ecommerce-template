import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './template/body/body.component';
import { VendasComponent } from './template/vendas/vendas.component';

const routes: Routes =
[
  {
    path: '',
    component: BodyComponent
  }
  ,
  {
    path: 'vendas/:id',
    component: VendasComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
