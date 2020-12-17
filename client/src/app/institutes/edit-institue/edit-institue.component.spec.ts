import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditInstitueComponent } from './edit-institue.component';

describe('EditInstitueComponent', () => {
  let component: EditInstitueComponent;
  let fixture: ComponentFixture<EditInstitueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditInstitueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditInstitueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
