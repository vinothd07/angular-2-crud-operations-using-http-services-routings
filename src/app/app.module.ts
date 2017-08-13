import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { PerformComponent } from './components/perform/perform.component';
import { DataListComponent } from './components/data-list/data-list.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AdduserComponent } from './components/adduser/adduser.component';
import { UpdateuserComponent } from './components/updateuser/updateuser.component';
const appRoutes: Routes =[
  {path:'', component:HomeComponent},
  {path:'view_data', component:DataListComponent},
  {path:'actions', component:PerformComponent},
  {path:'add_user',component:AdduserComponent},
  {path:'adduser',component:PerformComponent},
  {path:'viewdatas', component:PerformComponent},
  {path:'update_user', component:UpdateuserComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    PerformComponent,
    DataListComponent,
    HomeComponent,
    NavbarComponent,
    AdduserComponent,
    UpdateuserComponent
  ],
  imports: [
    BrowserModule, HttpModule, FormsModule, ReactiveFormsModule, RouterModule.forRoot(appRoutes),
    FlashMessagesModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
