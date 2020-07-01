import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PapelariaComponent } from './papelaria.component';

describe('PapelariaComponent', () => {
  let component: PapelariaComponent;
  let fixture: ComponentFixture<PapelariaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PapelariaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PapelariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
