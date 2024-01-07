import {Component, Input} from '@angular/core';

@Component({
  selector: 'vaultr-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  @Input() sidebarType: string = "notes";

}
