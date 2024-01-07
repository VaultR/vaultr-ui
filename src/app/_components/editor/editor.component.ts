import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {CodemirrorBinding} from "y-codemirror";
import * as Y from 'yjs';
import {WebsocketProvider} from 'y-websocket';
import 'codemirror/mode/javascript/javascript.js';
import {environment} from "../../../environments/environment";

@Component({
  selector: 'vaultr-editor',
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.css'
})
export class EditorComponent implements OnInit, OnDestroy {
  private binding: CodemirrorBinding | undefined;
  private provider: WebsocketProvider | undefined;

  @Input() id: string | undefined;

  constructor(private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  public ngOnInit(): void {

  }

  public ngOnDestroy(): void {
    this.provider?.disconnect();
    this.binding?.destroy();
  }

  public onCodeMirrorLoaded(codeMirrorComponent: any): void {
    const document = new Y.Doc();
    this.provider = new WebsocketProvider(`ws://${environment.noteApiUrl}`, this.id!, document);
    const text = document.getText(this.id!);
    const undoManager = new Y.UndoManager(text);

    this.binding = new CodemirrorBinding(text, codeMirrorComponent.codeMirror, this.provider.awareness, {
      yUndoManager: undoManager
    });
  }

}
