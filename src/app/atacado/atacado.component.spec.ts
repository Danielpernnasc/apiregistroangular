import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtacadoComponent } from './atacado.component';

describe('AtacadoComponent', () => {
  let component: AtacadoComponent;
  let fixture: ComponentFixture<AtacadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtacadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtacadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
