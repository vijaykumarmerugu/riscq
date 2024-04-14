import { Component } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';
import { LayoutService } from '../../../services/layout.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(
    private sidebarService: NbSidebarService,
    private layoutService: LayoutService
  ){ }
  toggleSidebar(){
    this.sidebarService.toggle(true, 'menu-sidebar')
    this.layoutService.changeLayoutSize();
    return false;
  }

}
