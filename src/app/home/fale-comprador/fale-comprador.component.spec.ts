import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaleCompradorComponent } from './fale-comprador.component';

describe('FaleCompradorComponent', () => {
  let component: FaleCompradorComponent;
  let fixture: ComponentFixture<FaleCompradorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaleCompradorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaleCompradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
