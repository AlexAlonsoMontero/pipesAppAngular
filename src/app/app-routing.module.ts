import { NgModule  } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PorPaisComponent } from './pais/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pais/pages/por-region/por-region.component';
import { PorCapitalComponent } from './pais/pages/por-capital/por-capital.component';
import { PorVerPaisComponent } from './pais/pages/por-ver-pais/por-ver-pais.component';

const routes: Routes = [

  {
    path:'',
    component: PorPaisComponent,
    pathMatch: 'full'
  },
  {
    path: 'region',
    component: PorRegionComponent
  },
  {
    path: 'capital',
    component: PorCapitalComponent
  },
  {
    path: 'pais/:id',
    component: PorVerPaisComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot( routes )
  ],exports:[
    RouterModule
  ]
})

export class AppRoutingModule {}
