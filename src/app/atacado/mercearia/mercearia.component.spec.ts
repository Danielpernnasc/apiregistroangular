import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MerceariaComponent } from './mercearia.component';

describe('MerceariaComponent', () => {
  let component: MerceariaComponent;
  let fixture: ComponentFixture<MerceariaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerceariaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MerceariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
