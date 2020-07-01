import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalHigieneComponent } from './modal-higiene.component';

describe('ModalHigieneComponent', () => {
  let component: ModalHigieneComponent;
  let fixture: ComponentFixture<ModalHigieneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalHigieneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalHigieneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
