import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children:[
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'tareas',
        loadChildren: () => import('../tareas/tareas.module').then( m => m.TareasPageModule)
      },
      {
        path: 'compras',
        loadChildren: () => import('../compras/compras.module').then( m => m.ComprasPageModule)
      },
      {
        path: 'recordatorios',
        loadChildren: () => import('../recordatorios/recordatorios.module').then( m => m.RecordatoriosPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
