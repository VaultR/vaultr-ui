import {Routes} from '@angular/router';
import {EditorComponent} from "./_components/editor/editor.component";
import {EmptyEditorComponent} from "./_components/empty-editor/empty-editor.component";

export const routes: Routes = [
  {path: 'notes/:id', component: EditorComponent},
  {path: '', component: EmptyEditorComponent,}
];
