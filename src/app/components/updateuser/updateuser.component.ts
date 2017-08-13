import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpService } from '../../services/http.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router }  from '@angular/router';  

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css'],
  providers: [HttpService]
})
export class UpdateuserComponent implements OnInit {
 data = {};
datas = [];
id:string;

isEditing = false;
shownTable = true;

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

  getDatas(){
    this.homeService.getDatas().subscribe(
      data => this.datas = data,
      err => console.log(err)
    )
  }
   enableEditing(data){
    this.shownTable = false;
    this.isEditing = true;
    this.data = data;
  
  }

  editData(data){
    this.homeService.editData(data).subscribe(
      res => {
        this.isEditing = false;
        this.shownTable = true;
        this.datas = res.data;
        this.getDatas();
        this.flashMessage.show(data.Name+" 's "+"datas are Updated successfully.", {cssClass:'alert-success', timeout:3000});
        // setTimeout((_router: Router) => {
        //  this._router.navigate(['/view_data']);
        // }, 3000);  //3s
      },
      error => console.log(error)
    );
  }

}
