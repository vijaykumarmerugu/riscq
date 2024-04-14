import { Routes } from '@angular/router';

export const routes: Routes = [
   {
    path:'',
    loadChildren: ()=> import('./components/features/features.module').then((m) => m.FeaturesModule)
   }
];
