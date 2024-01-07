import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'vaultr-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {
  @Output() selectionChange = new EventEmitter<string>();

  selectSidebar(sidebarType: string) {
    this.selectionChange.emit(sidebarType);
  }
}
