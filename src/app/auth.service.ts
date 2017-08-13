import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  constructor(private http:Http) { }
  ngOnInit(){
    console.log('here')
    console.log(this.http.get('http://localhost:4200/api/register').map(res => res.json()));
        return this.http.get('http://localhost:4200/api/register')
            .map(res => res.json());
            
  }

}
