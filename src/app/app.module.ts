import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {CommonModule} from '@angular/common';
import {CodemirrorModule} from '@ctrl/ngx-codemirror';
import {
  provideRouter,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
  withComponentInputBinding,
  withDebugTracing, withRouterConfig
} from "@angular/router";
import {routes} from "./app.routes";
import {SidebarComponent} from "./_components/sidebar/sidebar.component";
import {EditorComponent} from "./_components/editor/editor.component";
import {EmptyEditorComponent} from "./_components/empty-editor/empty-editor.component";
import {ToolbarComponent} from "./_components/toolbar/toolbar.component";


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SidebarComponent,
    EditorComponent,
    EmptyEditorComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    CodemirrorModule,
  ],
  providers: [
    provideRouter(routes,
      withComponentInputBinding(),
      withDebugTracing(),
      withRouterConfig({
        onSameUrlNavigation: 'reload'
      }))
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
