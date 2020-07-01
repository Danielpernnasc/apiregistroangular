import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalHortifrutiComponent } from './modal-hortifruti.component';

describe('ModalHortifrutiComponent', () => {
  let component: ModalHortifrutiComponent;
  let fixture: ComponentFixture<ModalHortifrutiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalHortifrutiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalHortifrutiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
