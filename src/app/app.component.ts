import {Component} from '@angular/core';
import 'codemirror/mode/javascript/javascript.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentSidebar: string = 'notes';

  onSidebarSelectionChange(selectedSidebar: string) {
    this.currentSidebar = selectedSidebar;
  }
}
