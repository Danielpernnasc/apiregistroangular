import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HortifrutiComponent } from './hortifruti.component';

describe('HortifrutiComponent', () => {
  let component: HortifrutiComponent;
  let fixture: ComponentFixture<HortifrutiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HortifrutiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HortifrutiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
