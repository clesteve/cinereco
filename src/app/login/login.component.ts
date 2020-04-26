import { Component, OnInit } from '@angular/core';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { DataService } from '../data.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  faSpinner = faSpinner;
  email = '';

  constructor(
    public dataService: DataService,
    public dialogRef: MatDialogRef<LoginComponent>
  ) { }

  ngOnInit(): void {
  }

  login() {
    (document.getElementById('connectTitle') as HTMLInputElement).style.display = 'none';
    (document.getElementById('loginspinner') as HTMLInputElement).style.display = 'block';
    this.dataService.getUser(this.email).subscribe(res => {
      if (res.email) {
        localStorage.setItem('user', JSON.stringify(res));
        this.dialogRef.close();
      } else {
        alert('Failed to connect');
        (document.getElementById('connectTitle') as HTMLInputElement).style.display = 'block';
        (document.getElementById('loginspinner') as HTMLInputElement).style.display = 'none';
      }
    });
  }
}
