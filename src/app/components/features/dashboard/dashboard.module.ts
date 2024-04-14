import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { LayoutModule } from '../../layout/layout.module';
import { NbIconModule, NbLayoutModule, NbSidebarModule, NbSidebarService, NbThemeModule, NbThemeService } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';


const routes: Routes = [
  {
    path:'',
    component: DashboardComponent,

  }
]

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    LayoutModule,
    NbThemeModule,
    NbLayoutModule,
    NbSidebarModule,
    NbIconModule,
    NbEvaIconsModule,
    RouterModule.forChild(routes)
  ],
  providers:[
    NbThemeService,
    NbSidebarService
  ],
  exports:[
    RouterModule
  ]
})
export class DashboardModule { }
