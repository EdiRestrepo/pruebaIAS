import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path:'home',
    loadComponent: ()=>import('./formGenerator/pages/home/home.component').then(c => c.HomeComponent),
    children:[
      {
        path:'direccionentrega',
        loadComponent:() => import('./formGenerator/pages/display/display.component').then(c => c.DisplayComponent)
      },
      {
        path:'fechaentrega',
        loadComponent:()=>import('./formGenerator/pages/delivery-date/delivery-date.component').then(c => c.DeliveryDateComponent)
      },
      {
        path:'form',
        loadComponent:()=>import('./formGenerator/pages/delivery/delivery.component').then(c => c.DeliveryComponent)
      },
      {
        path:'**',
        redirectTo:'fechaentrega'
      }
    ]
  },
  {
    path:'**',
    redirectTo:'home'
  }
];
