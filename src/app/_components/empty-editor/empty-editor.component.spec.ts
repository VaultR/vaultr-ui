import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyEditorComponent } from './empty-editor.component';

describe('EmptyEditorComponent', () => {
  let component: EmptyEditorComponent;
  let fixture: ComponentFixture<EmptyEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmptyEditorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmptyEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
