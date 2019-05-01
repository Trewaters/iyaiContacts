import { Component, OnInit, SecurityContext } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';

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

  constructor(private fb: FormBuilder, private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  onSubmit() {

    function makeTable(cntData) {
      let linesCntData = [];

      linesCntData = cntData.split("\n" || "\n\r");

      let columnsCntData = [];
      let tableCntData = [];
      let htmlString = "";

      for (let i = 0; i < linesCntData.length; i++) {
        let strLine = "";
        let newLineAsArr = [];

        strLine = linesCntData[i];
        if (i === 0) {
          newLineAsArr = strLine.split(/","|,/); // capture headers
        } else {
          newLineAsArr = strLine.split(/(?<="),|,(?=")|,(?!\s)/); // split on commas that are not quoted or are followed by a space (\s)
        }
        columnsCntData = Array.from(newLineAsArr);
        tableCntData[i] = columnsCntData;
      }
      htmlString = '<table class="w3-table-all">';

      for (let i = 0; i < tableCntData.length; i++) {
        htmlString += `<tr>`;

        if (i === 0) {
          for (let j = 0; j < tableCntData[0].length; j++) {
            htmlString += `<th>${tableCntData[0][j]}</th>`;
          }
        } else {
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
    this.vSafeHtml = this.sanitizer.sanitize(SecurityContext.HTML,this.unSafeHtml);

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
