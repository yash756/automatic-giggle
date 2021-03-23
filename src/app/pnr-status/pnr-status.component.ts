import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pnr-status',
  templateUrl: './pnr-status.component.html',
  styleUrls: ['./pnr-status.component.css']
})
export class PnrStatusComponent implements OnInit {

  pnrNo : number;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  generate() {
    let url = "http://localhost:8081/rest-app/api/pnr?pnrNo=" + this.pnrNo;
    this.http.get(url).subscribe(response =>{
      alert(JSON.stringify(response));
    })
  }

}
