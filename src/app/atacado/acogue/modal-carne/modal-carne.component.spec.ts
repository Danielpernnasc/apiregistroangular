import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCarneComponent } from './modal-carne.component';

describe('ModalCarneComponent', () => {
  let component: ModalCarneComponent;
  let fixture: ComponentFixture<ModalCarneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalCarneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCarneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
