import { Component } from '@angular/core';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { DataService } from './data.service';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private dataService: DataService,
    public dialog: MatDialog) { }

  faUserCircle = faUserCircle;
  user = {};

  isUser() {
    this.user = JSON.parse(localStorage.getItem('user'));
    return this.user;
  }

  logout() {
    localStorage.removeItem('user');
  }

  openLogin() {
    this.dialog.open(LoginComponent, {
      width: '600px'
    });
  }

}
