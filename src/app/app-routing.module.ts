import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuadroComponent } from './quadro/quadro.component';
import { InformacoesComponent } from './quadro/mesa/informacoes/informacoes.component';

const routes: Routes = [
  {
    path: '',
    component: QuadroComponent
  },
  {
    path: 'info' ,
    //+ InformacoesComponent.routeParamKey,
    children: [
      {
        path: ':' + InformacoesComponent.routeParamKey,
        pathMatch: 'full',
        component: InformacoesComponent
      }
    ]
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
