import { Component, OnInit } from '@angular/core';
import { CntMongoService } from 'src/app/Services/cnt-mongo.service';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  contacts: any;
  frmSearch: FormGroup = new FormGroup({
    searchItem: new FormControl('')
  });

  constructor(private http: HttpClient, private service: CntMongoService) { }

  ngOnInit() {

   }

  searchContacts() {
    let searchThis = this.frmSearch.get('searchItem'); // looking for nmFull field

    // console.log("searchContacts-searchThis...", searchThis);

    this.service.searchContacts(searchThis).subscribe(res => {

      // console.log('searchContacts-res...\n',res);

      this.contacts = res;
    })
  }

}
