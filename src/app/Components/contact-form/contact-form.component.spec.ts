import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule, By } from '@angular/platform-browser';

import { ContactFormComponent } from './contact-form.component';

describe('ContactFormComponent', () => {
  let component: ContactFormComponent;
  let fixture: ComponentFixture<ContactFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactFormComponent ],
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents()
    /* .then(() =>{
      fixture = TestBed.createComponent(ContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // boilerplate
    // I added this debugElement
    // de = fixture.debugElement.query(By.css('form'));
    // el = de.nativeElement;
    }); */
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // boilerplate
    // I added this debugElement
    // de = fixture.debugElement.query(By.css('form'));

  });
/*
  it('should create', () => {
    expect(component).toBeTruthy();
  });
 */
  it('should have flag', async(()=>{
    expect(component.flag).toEqual('test');
  }));

/*
  it('should have cntIyai class', async(()=>{
    expect(component.contact).toBeDefined()
  }));
   */
});
