import { Component, OnInit } from '@angular/core';
import { CntMongoService } from 'src/app/Services/cnt-mongo.service';
import { Observable } from 'rxjs/Observable';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-display-all',
  templateUrl: './display-all.component.html',
  styleUrls: ['./display-all.component.css']
})
export class DisplayAllComponent implements OnInit {

  contacts: any;

  constructor(private service: CntMongoService) { }

  ngOnInit() {
    this.getContacts();
  }

  getContacts() {
    this.service.getContacts().subscribe(res => {
      this.contacts = res;
    })
  }

  exportContacts(){
    this.downloadFile(this.contacts);
  }

  downloadFile(data) {
    let strData: any[] = [];
    data.forEach(function (element,ind){
      if (ind === 0){
        strData[0] = Object.keys(element).toString() + '\n';
        strData[ind+1] = Object.values(element).toString() + '\n';
      }else{
      strData[ind+1] = Object.values(element).toString() + '\n';
      }
    });
    let blob = new Blob(strData, { type: 'text/csv;charset=utf-8;' });

    saveAs(blob,"iyaiContacts.csv");
  }
}
