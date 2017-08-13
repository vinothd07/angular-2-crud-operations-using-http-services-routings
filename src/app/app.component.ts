import { Component } from '@angular/core';
import {Http,Response} from '@angular/http';
import {DataListComponent} from './components/data-list/data-list.component';
import {PerformComponent} from './components/perform/perform.component';
// import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sample app';
  // value: string = ""; 
  //  constructor(private http:Http){}
  // ngOnInit(){
  //   this.http.get('http://localhost:3000/api/register')
  //           .subscribe(
  //               (res:Response)=>{
  //                   const datas=res.json();
  //                   console.log(datas);
  //               }
  //           ) 
  
  // }
}
