import { Component } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  sidebarMenuItems: NbMenuItem[] = [
    {
      title:'Profile',
      icon: 'chevron-right-outline'

    },
    {
      title: 'Company Profile',
      icon: 'chevron-right-outline'
    },
    {
      title: 'Initial Screening',
      icon: 'chevron-right-outline'
    }
  ]

}
