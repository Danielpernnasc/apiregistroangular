import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelevendasComponent } from './televendas.component';

describe('TelevendasComponent', () => {
  let component: TelevendasComponent;
  let fixture: ComponentFixture<TelevendasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelevendasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelevendasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
