import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCntComponent } from './delete-cnt.component';

describe('DeleteCntComponent', () => {
  let component: DeleteCntComponent;
  let fixture: ComponentFixture<DeleteCntComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteCntComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteCntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
