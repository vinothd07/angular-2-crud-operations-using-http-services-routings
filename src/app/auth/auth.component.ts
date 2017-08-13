import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth.service';

@Component({
  selector: 'auth-data',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  providers:[AuthService]
})
export class AuthComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
