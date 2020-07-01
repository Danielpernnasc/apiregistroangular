import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcogueComponent } from './acogue.component';

describe('AcogueComponent', () => {
  let component: AcogueComponent;
  let fixture: ComponentFixture<AcogueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcogueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
