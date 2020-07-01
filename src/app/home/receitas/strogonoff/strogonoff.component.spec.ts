import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrogonoffComponent } from './strogonoff.component';

describe('StrogonoffComponent', () => {
  let component: StrogonoffComponent;
  let fixture: ComponentFixture<StrogonoffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrogonoffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrogonoffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
