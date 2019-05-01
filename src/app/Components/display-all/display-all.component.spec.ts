import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayAllComponent } from './display-all.component';

describe('DisplayAllComponent', () => {
  let component: DisplayAllComponent;
  let fixture: ComponentFixture<DisplayAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
