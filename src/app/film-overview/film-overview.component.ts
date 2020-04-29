import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from '../data.service';

@Component({
  selector: 'app-film-overview',
  templateUrl: './film-overview.component.html',
  styleUrls: ['./film-overview.component.css']
})
export class FilmOverviewComponent implements OnInit {

  constructor(
    public dataService: DataService,
    @Inject(MAT_DIALOG_DATA) public data
  ) { }

  trailer = null;
  ImdbRating = 0;
  rottenTomato = '';
  rottenScore = null;

  ngOnInit(): void {
    console.log(this.data);
    this.ImdbRating = parseFloat(this.data.data.imdbRating);
    try {
      this.rottenScore = parseInt(this.data.data.Ratings[1].Value.substring(0, 2), 10);
    } catch {
      this.rottenScore = null;
    }
    this.rottenTomato = this.getRottenTomato();
    this.dataService.getTrailer(this.data.title).subscribe(res => {
      this.trailer = res;
    });
  }

  getColor(score) {
    if (score > 60) {
      return '#66CC33';
    } else if (score > 40) {
      return '#FFCC33';
    } else {
      return '#FF0000';
    }
  }

  getRottenTomato() {
    try {
      if (this.rottenScore >= 60) {
        return 'https://www.rottentomatoes.com/assets/pizza-pie/images/icons/tomatometer/tomatometer-fresh.149b5e8adc3.svg';
      } else {
        return 'https://www.rottentomatoes.com/assets/pizza-pie/images/icons/tomatometer/tomatometer-rotten.f1ef4f02ce3.svg';
      }
    } catch {
      return 'https://www.rottentomatoes.com/assets/pizza-pie/images/icons/tomatometer/tomatometer-empty.cd930dab34a.svg';
    }
  }

}
