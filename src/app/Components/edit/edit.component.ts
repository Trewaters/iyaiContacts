import { Component, OnInit } from '@angular/core';
import { CntMongoService } from 'src/app/Services/cnt-mongo.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { cntIyai } from 'src/app/Models/contact';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  editFrmContacts: FormGroup;
  contact: cntIyai = new cntIyai();

  constructor(private editService: CntMongoService, private _fb:FormBuilder) {
    this.createForm();
   }

  ngOnInit() {
  }

  searchCnt(){

    let searchThis = this.editFrmContacts.get('nmFull');

    this
    .editService
    .searchContacts(searchThis)
    .subscribe( res =>{
      // this.editFrmContacts.setValue(res)
      this.editFrmContacts.patchValue(res[0]);

      console.log("res...",res);
      // console.log("searchThis...",searchThis);

      // this.contact.nmPref = res[0].nmPref;

    });
  }

  createForm(){

    this.editFrmContacts = this._fb.group({
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
      twitter: new FormControl(this.contact.twitter)
    })

  }

  editIyaiContacts(){
    // console.log("editIyaiContacts-this.editFrmContacts...",this.editFrmContacts);

    this.editService.editContact(this.editFrmContacts.value);
  }

}
