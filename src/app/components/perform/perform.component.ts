import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpService } from '../../services/http.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router }  from '@angular/router';  
@Component({
  selector: 'app-perform',
  templateUrl: './perform.component.html',
  styleUrls: ['./perform.component.css'],
  providers: [HttpService]
})
export class PerformComponent implements OnInit {
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
        this.flashMessage.show("Data's are added successfully.", {cssClass:'alert-success', timeout:3000});
        setTimeout((_router: Router) => {
         this._router.navigate(['/view_data']);
        }, 4000);  // 4s
      },
      err => console.log(err)
    );
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
      },
      error => console.log(error)
    );
  }

  deleteData(data){
    this.homeService.deleteData(data).subscribe(
        res => {
          const pos = this.datas.map(elem => elem.id).indexOf(data.id);
          this.datas.splice(pos, 1);
           this.flashMessage.show("Id No. "+data.id+" 's "+"datas are Deleted successfully.", {cssClass:'alert-success', timeout:3000});
        },
        error => console.log(error)
      );
  }
}
