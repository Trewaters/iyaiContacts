import { Component, OnInit } from '@angular/core';
import { CntMongoService } from 'src/app/Services/cnt-mongo.service';
import { FormGroup, FormControl } from '@angular/forms';
import { cntIyai } from 'src/app/Models/contact';

@Component({
  selector: 'app-delete-cnt',
  templateUrl: './delete-cnt.component.html',
  styleUrls: ['./delete-cnt.component.css']
})
export class DeleteCntComponent implements OnInit {

  frmDelete: FormGroup = new FormGroup({
    ctlSearch: new FormControl('')
  });

  contacts:any;

  constructor(private deleteService: CntMongoService) { }

  ngOnInit() {
  }

  searchContacts(){
    let searchThis = this.frmDelete.get('ctlSearch');

    this.deleteService.searchContacts(searchThis).subscribe(res =>{
      this.contacts = res;
    })
  }

  deleteCnt(id){
    console.log("id...",id);

    this.deleteService.deleteContact(id).subscribe(res=>{
      console.log('Contact Deleted');
    })
  }
}
