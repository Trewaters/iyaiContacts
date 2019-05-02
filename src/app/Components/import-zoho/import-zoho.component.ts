import { Component, OnInit, SecurityContext } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { CntMongoService } from 'src/app/Services/cnt-mongo.service';

@Component({
  selector: 'app-import-zoho',
  templateUrl: './import-zoho.component.html',
  styleUrls: ['./import-zoho.component.css']
})
export class ImportZohoComponent implements OnInit {

  impZoho: FormGroup = this.fb.group({
    file: [null, Validators.required]
  });

  buf: any;
  data: any;
  unSafeHtml: string;
  vSafeHtml: string;
  newHdr: any; // db save code

  constructor(private fb: FormBuilder, private sanitizer: DomSanitizer, private importService: CntMongoService) { }

  ngOnInit() {
  }

  onSubmit() {
    function convertStr2Arr(longString) {
      let linesCntData: string[] = [];
      let newLineAsArr = [];
      linesCntData = longString.split("\n" || "\n\r");
      for (let i = 0; i < linesCntData.length; i++) {
        let strLine = "";
        strLine = linesCntData[i];
        if (i === 0) {
          newLineAsArr[i] = strLine.split(/","|,/); // capture headers
        } else {
          newLineAsArr[i] = strLine.split(/(?<="),|,(?=")|,(?!\s)/); // split on commas that are not quoted or are followed by a space (\s)
        }
        // removing extra quotes
        newLineAsArr[i].forEach(function (element, ind) {
          let testRegex = new RegExp('"', 'g')
          let tempString = '';
          tempString = newLineAsArr[i][ind];
          newLineAsArr[i][ind] = tempString.replace(testRegex, '');
        })
        // console.log('convertStr2Arr() returns newLineAsArr...', newLineAsArr);
      }
      return newLineAsArr; //This has all the lines including header as index 0.
    }
    function createContactObj(arrHeaders, arrData) {
      let newObj = {};
      let newHeader = '';
      // console.log("arrData...", arrData);
      arrData.forEach(function (element, ind,arrData) {
        // console.log('element...',element, arrData[ind]);
        newHeader = arrHeaders[ind];
        switch (newHeader) {
          case 'First Name':
            newObj['nmPref'] = element
            break;
          case 'Title':
            newObj['orgTitle'] = element
            break;
          case 'Account Name':
            newObj['org'] = element
            break;
          case 'Department':
            newObj['orgStatus'] = element;
            break;
          case 'Secondary Email':
            newObj['emOther'] = element;
            break;
          case 'Email':
            newObj['emPref'] = element;
            break;
          case 'Mobile':
            newObj['phMobile'] = element;
            break;
          case 'Home Phone':
            newObj['phHome'] = element;
            break;
          case 'Other Phone':
            newObj['phOff'] = element;
            break;
          case 'Fax':
            newObj['phFax'] = element;
            break;
          case 'Phone':
            newObj['phPref'] = element;
            break;
          case 'Assistant':
            newObj['supName'] = element;
            break;
          case 'Asst Phone':
            newObj['supPhone'] = element;
            break;
          case 'Description':
            newObj['notes'] = element;
            break;
          case 'Twitter':
            newObj['Twitter'] = element;
            break;
          default:
            newObj['nmFull'] = arrData[4] + " " + arrData[5]; // combine First and Last Name fields for an iyai Full Name
            // console.log('new object nmFull added...', newObj['nmFull']);
        }
      }
      );
      // console.log("arrData...", arrData);
      // console.log("newHeader...", newHeader);
      // console.log("newObj...", newObj);
      return newObj;
    }
    let that = this;
    function makeTable(cntData) {
      let tableCntData = [];
      tableCntData = convertStr2Arr(cntData); // takes long string and converts each new line to an array element, including headers
      let htmlString = "";
      htmlString = '<table class="w3-table-all">';
      for (let i = 0; i < tableCntData.length; i++) {
        htmlString += `<tr>`;
        if (i === 0) {
          for (let j = 0; j < tableCntData[0].length; j++) {
            htmlString += `<th>${tableCntData[0][j]}</th>`;
          }
        } else {
          that.newHdr = createContactObj(tableCntData[0], tableCntData[i]);
          that.importService.addContact(that.newHdr);
          for (let j = 0; j < tableCntData[i].length; j++) {
            htmlString += `<td>${tableCntData[i][j]}</td>`;
          }
        }
        htmlString += `</tr>`;
      }
      htmlString += "</table>";
      return htmlString;
    }
    this.unSafeHtml = makeTable(this.data);
    this.vSafeHtml = this.sanitizer.sanitize(SecurityContext.HTML, this.unSafeHtml);
  }
  onFileChange(event) {
    let reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsArrayBuffer(file)
      reader.onload = () => {
        this.buf = reader.result;
        // console.log("this.buf...",this.buf);
        function ab2str(xbuf) {
          // console.log("xbuf...",xbuf);
          let stringBuf = String.fromCharCode.apply(null, new Uint8Array(xbuf)); // I used encode 8 so that I got the proper results
          // return String.fromCharCode.apply(null, new Uint8Array(buf));
          // console.log("stringBuf...",stringBuf);
          return stringBuf;
        }
        // Zoho CRM exports are 44 fields wide, in a CSV format.
        function processZohoCrm(allText) {
          let record_num = 44;
          let allTextLines = allText.split(/\r\n|\n/);
          let entries = allTextLines[0].split(",");
          let lines = [];
          let headings = entries.splice(0, record_num);
          while (entries.length > 0) {
            let tarr = [];
            for (var j = 0; j < record_num; j++) {
              tarr.push(headings[j] + ":" + entries.shift());
            }
            lines.push(tarr);
          }
          // return lines;
        }
        // console.log("ab2str(this.buf)...",ab2str(this.buf));
        this.data = ab2str(this.buf);
      }
    }
  }
}
