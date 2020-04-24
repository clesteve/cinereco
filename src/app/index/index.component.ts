import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private dataService: DataService) { }

  movies = [];

  ngOnInit() {
    this.getMovies().subscribe(res => {
      this.movies = res;
      console.log(this.movies);
    });
  }

  getMovies() {
    return this.dataService.getMovies();
  }

}
