import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FeaturesComponent } from './features.component';
import { LayoutModule } from '../layout/layout.module';
import { NbIconModule, NbLayoutModule, NbThemeModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

const routes: Routes = [
  {
    path:'',
    component: FeaturesComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule)
      },
    ]

  }
]


@NgModule({
  declarations: [FeaturesComponent],
  imports: [
    CommonModule,
    LayoutModule,
    NbThemeModule,
    NbLayoutModule,
    NbIconModule,
    NbEvaIconsModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class FeaturesModule { }
