import {Component, OnDestroy} from '@angular/core';
import * as Y from 'yjs';
import {WebsocketProvider} from 'y-websocket';
import {CodemirrorBinding} from 'y-codemirror';
import 'codemirror/mode/javascript/javascript.js';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {

  private binding: CodemirrorBinding | undefined;

  constructor() {
  }

  public onCodeMirrorLoaded(codeMirrorComponent: any) {
    const yDoc = new Y.Doc();
    const provider = new WebsocketProvider(
      'ws://localhost:3000',
      'codemirror-demo',
      yDoc
    );
    const yText = yDoc.getText('codemirror');
    const yUndoManager = new Y.UndoManager(yText)

    this.binding = new CodemirrorBinding(yText, codeMirrorComponent.codeMirror, provider.awareness, {yUndoManager});
  }

  public ngOnDestroy(): void {
    this.binding?.destroy();
  }

}
