import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PereciveisComponent } from './pereciveis.component';

describe('PereciveisComponent', () => {
  let component: PereciveisComponent;
  let fixture: ComponentFixture<PereciveisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PereciveisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PereciveisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
