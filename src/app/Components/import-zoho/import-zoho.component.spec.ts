import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportZohoComponent } from './import-zoho.component';

describe('ImportZohoComponent', () => {
  let component: ImportZohoComponent;
  let fixture: ComponentFixture<ImportZohoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportZohoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportZohoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
