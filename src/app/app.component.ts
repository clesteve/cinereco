import { Component } from '@angular/core';
import { faUserCircle, faFilm, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { DataService } from './data.service';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from './login/login.component';
import { HelpComponent } from './help/help.component';

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
  faGithub = faGithub;
  faFilm = faFilm;
  faQuestionCircle = faQuestionCircle;

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

  openHelp() {
    this.dialog.open(HelpComponent, {
      width: '600px'
    });
  }

}
