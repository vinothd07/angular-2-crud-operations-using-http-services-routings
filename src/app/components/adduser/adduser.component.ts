import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpService } from '../../services/http.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css'],
  providers: [HttpService]
})
export class AdduserComponent implements OnInit {
data = {};
datas = [];
id:string;

isEditing = false;
visibleAddUser = false;
shownTable = false;

addDataForm: FormGroup;
  Name = new FormControl('', Validators.required);
  Place = new FormControl('', Validators.required);
  Age = new FormControl('', Validators.required);

  constructor(private homeService:HttpService,
              private formBuilder: FormBuilder,
              private http: Http,
              private flashMessage:FlashMessagesService,
              private _router: Router
               ) {
   }
  ngOnInit() {
      this.getDatas();
      this.addDataForm = this.formBuilder.group({
        id: this.id,
        Name: this.Name,
        Place: this.Place,
        Age: this.Age
      });
  }
  visibleForm(){
    this.visibleAddUser = true;
    this.shownTable = false;
  }
  visibleData(){
    this.visibleAddUser = false;
    this.shownTable = true;
  }

  getDatas(){
    this.homeService.getDatas().subscribe(
      data => this.datas = data,
      err => console.log(err)
    )
  }

  addData(datas) { this.homeService.addData(this.addDataForm.value).subscribe(
      res => {
        const newData = res.json();
        this.datas.push(newData);
        this.addDataForm.reset();
        this.getDatas();
        this.flashMessage.show('Datas are added successfully.', {cssClass:'alert-success', timeout:3000});
        setTimeout((_router: Router) => {
         this._router.navigate(['/view_data']);
        }, 4000);  // 4s
      },
      err => console.log(err)
    );
  }
}