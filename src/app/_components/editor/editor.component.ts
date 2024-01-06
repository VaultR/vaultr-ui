import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {of, switchMap} from "rxjs";
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
  public noteId: string | null = null;
  private provider: WebsocketProvider | undefined;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  public ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;

    this.activatedRoute.params.pipe(
      switchMap(params => {
        this.noteId = params['id'];
        return of(this.noteId);
        // return this.noteService.getNoteDetails(this.noteId);
      })
    ).subscribe(noteDetails => {

    });
  }

  public ngOnDestroy(): void {
    this.provider?.disconnect();
    this.binding?.destroy();
  }

  public onCodeMirrorLoaded(codeMirrorComponent: any): void {
    const document = new Y.Doc();
    this.provider = new WebsocketProvider(
      `ws://${environment.noteApiUrl}`,
      this.noteId!,
      document
    );
    const text = document.getText(this.noteId!);
    const undoManager = new Y.UndoManager(text);

    this.binding = new CodemirrorBinding(text, codeMirrorComponent.codeMirror, this.provider.awareness, {
      yUndoManager: undoManager
    });
  }

}
