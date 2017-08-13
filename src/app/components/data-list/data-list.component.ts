import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpService } from '../../services/http.service';
@Component({
  selector: 'app-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.css'],
  providers:[HttpService]
})
export class DataListComponent implements OnInit {
    // response:string;
    datas = [];
    constructor(private httpService: HttpService) {}
	ngOnInit(){
    // getDatas(){
    this.httpService.getDatas().subscribe(
      data => this.datas = data,
      err => console.log(err)
    )
  // }
  
  }
}
