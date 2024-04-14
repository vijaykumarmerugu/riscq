import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NbIconModule, NbLayoutModule, NbSidebarModule, NbThemeModule  } from '@nebular/theme';
import { LayoutModule } from './components/layout/layout.module';
import { NbEvaIconsModule } from '@nebular/eva-icons';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NbThemeModule.forRoot(),
    NbLayoutModule,
    NbIconModule,
    NbEvaIconsModule,
    LayoutModule,
    NbSidebarModule.forRoot()
  ],
  exports:[RouterModule]
})
export class AppModule { }
