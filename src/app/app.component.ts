import {Component, OnDestroy, OnInit} from '@angular/core';
import * as Y from 'yjs';
import {WebsocketProvider} from 'y-websocket';
import {CodemirrorBinding} from 'y-codemirror';
import 'codemirror/mode/javascript/javascript.js';
import {ActivatedRoute} from "@angular/router";
import {environment} from "../environments/environment";

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  private binding: CodemirrorBinding | undefined;
  private noteId: string | null = null;

  constructor(private route: ActivatedRoute) {
  }

  public ngOnInit(): void {
    this.noteId = this.route.snapshot.paramMap.get('id');
    this.noteId = 'abcd';
  }

  public onCodeMirrorLoaded(codeMirrorComponent: any) {
    const document = new Y.Doc();
    const provider = new WebsocketProvider(
      `ws://${environment.noteApiUrl}`,
      this.noteId!,
      document
    );
    const text = document.getText(this.noteId!);
    const undoManager = new Y.UndoManager(text);

    this.binding = new CodemirrorBinding(text, codeMirrorComponent.codeMirror, provider.awareness, {
      yUndoManager: undoManager
    });
  }

  public ngOnDestroy(): void {
    this.binding?.destroy();
  }
}
