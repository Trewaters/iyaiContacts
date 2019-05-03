import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

import { cntIyai } from 'src/app/Models/contact';
import { CntMongoService } from 'src/app/Services/cnt-mongo.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})

export class ContactFormComponent implements OnInit {

  contact: cntIyai = new cntIyai();
  flag: String ='test';

  frmContact: FormGroup;

  constructor(private _fb: FormBuilder, private cntService: CntMongoService ) {
    this.createForm();
  }

  ngOnInit() {
    console.log('this.flag...', this.flag)
  }

  /**
 * createForm()
 *
 * binds the form data to the form
 */
createForm(){
    this.frmContact = this._fb.group({
      nmFull: new FormControl(this.contact.nmFull),
      nmPref: new FormControl(this.contact.nmPref),
      orgTitle: new FormControl(this.contact.orgTitle),
      org: new FormControl(this.contact.org),
      orgStatus: new FormControl(this.contact.orgStatus),
      orgWeb: new FormControl(this.contact.orgWeb),
      addrHome: new FormControl(this.contact.addrHome),
      addrMail: new FormControl(this.contact.addrMail),
      emIyai: new FormControl(this.contact.emIyai),
      emOther: new FormControl(this.contact.emOther),
      emPref: new FormControl(this.contact.emPref),
      phIyai: new FormControl(this.contact.phIyai),
      phMob: new FormControl(this.contact.phMob),
      phHome: new FormControl(this.contact.phHome),
      phOff: new FormControl(this.contact.phOff),
      phFax: new FormControl(this.contact.phFax),
      phPref: new FormControl(this.contact.phPref),
      supName: new FormControl(this.contact.supName),
      supEmail: new FormControl(this.contact.supEmail),
      supPhone: new FormControl(this.contact.supPhone),

      userUpdate: new FormControl(this.contact.userUpdate),
      userCreated: new FormControl(this.contact.userCreated),
      dateupdated: new FormControl(this.contact.dateupdated),
      dateCreated: new FormControl(this.contact.dateCreated),
      dateOfBirth: new FormControl(this.contact.dateOfBirth),
      addrMailCountry: new FormControl(this.contact.addrMailCountry),
      addrHomeCountry: new FormControl(this.contact.addrHomeCountry),
      version: new FormControl(this.contact.version),
      lists: new FormControl(this.contact.lists),
      visibility: new FormControl(this.contact.visibility),
      notes: new FormControl(this.contact.notes),
      twitter: new FormControl(this.contact.twitter),
      flag: new FormControl(this.flag)
    });
  }

/**
 * postIyaiContacts()
 *
 * calls the CntMongoService service to store the contact data
 */
  postIyaiContacts() {
    // console.log(`frmContact... `, this.frmContact);
    // console.log('this.frmContact.value...', this.frmContact.value);
    // console.log('this.frmContact.value.nmFull...', this.frmContact.value.nmFull);
    // console.log('this.frmContact.get(\'nmFull\').value...', this.frmContact.get('nmFull').value);
    // console.log('radio button.value...', this.frmContact.get('flag').value);
    // console.log('this.flag...', this.frmContact.get('flag').value);

    /*
    - search if contact exist before allowing user to add new contact.
    - if the contact already exists, show the user
    - and cancel the "add contact" operation
    [4/30/2019]
    */

    let vMongo = this.frmContact.get('flag').value;

    if (this.frmContact.status === 'VALID') {
      switch(vMongo){
        case 'mongo':
        this.cntService.addContact(this.frmContact.value);
        // this.contact = this.frmContact.value;
        // console.log('this.contact...',this.contact);
        // console.log('this.frmContact.value...',this.frmContact.value);
        break;
        case 'memory':
        localStorage.setItem('contact', JSON.stringify(this.frmContact.value));
        console.log('memory contact data...',localStorage.getItem('contact'));
        break;
      }
      // console.log('Contact form data was submitted.');
    } else {
      alert(`Unable to submit form!\nCheck what you entered. Correct fields turn gray.`);
    }
  }
};
