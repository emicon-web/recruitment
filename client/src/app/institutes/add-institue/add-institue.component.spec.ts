import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInstitueComponent } from './add-institue.component';

describe('AddInstitueComponent', () => {
  let component: AddInstitueComponent;
  let fixture: ComponentFixture<AddInstitueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddInstitueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddInstitueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
