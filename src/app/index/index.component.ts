import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DataService } from '../data.service';
import { RecosComponent } from '../recos/recos.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FilmOverviewComponent } from '../film-overview/film-overview.component';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { ViewChild } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, tap, scan, mergeMap, throttleTime } from 'rxjs/operators';
import { faFilm } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})

export class IndexComponent implements OnInit {
  @ViewChild(CdkVirtualScrollViewport)
  viewport: CdkVirtualScrollViewport;

  faFilm = faFilm;

  batch = 20;
  theEnd = false;

  offset = new BehaviorSubject(null);
  infinite: Observable<any[]>;

  constructor(
    private dataService: DataService,
    public dialog: MatDialog) {
  }

  movies = [];
  liked = [];
  disliked = [];
  watched = [];
  last_page = 0;

  liked_full = [];
  disliked_full = [];
  watched_full = [];

  page = 0;
  loading = true;
  generation_disabled = false;
  sidenav_open = false;
  faSpinner = faSpinner;
  filters = {
    title: ''
  };

  ngOnInit() {
    this.getMovies(this.page).subscribe(res => {
      this.movies = res;
      this.loading = false;
    });
  }

  like(movie) {
    const id = movie.movieId;
    if (this.liked.includes(id)) {
      const index = this.liked.indexOf(id);
      this.liked.splice(index, 1);
    } else {
      if (this.disliked.includes(id)) {
        const index = this.disliked.indexOf(id);
        this.disliked.splice(index, 1);
      }
      this.liked.push(id);
    }
    this.liked_full.push(movie);
    this.liked_full = this.liked_full.filter(mv => this.liked.includes(mv.movieId));
  }

  watch(movie) {
    const id = movie.movieId;
    if (this.watched.includes(id)) {
      const index = this.watched.indexOf(id);
      this.watched.splice(index, 1);
    } else {
      this.watched.push(id);
    }
    this.watched_full.push(movie);
    this.watched_full = this.watched_full.filter(mv => this.watched.includes(mv.movieId));
  }

  dislike(movie) {
    const id = movie.movieId;
    if (this.disliked.includes(id)) {
      const index = this.disliked.indexOf(id);
      this.disliked.splice(index, 1);
    } else {
      if (this.liked.includes(id)) {
        const index = this.liked.indexOf(id);
        this.liked.splice(index, 1);
      }
      this.disliked.push(id);
    }
    this.disliked_full.push(movie);
    this.disliked_full = this.disliked_full.filter(mv => this.disliked.includes(mv.movieId));
  }

  getMovies(page) {
    return this.dataService.getMovies(page, this.filters);
  }

  getColor(id) {
    if (this.disliked.includes(id)) {
      return '#e74c3c';
    }
    if (this.liked.includes(id)) {
      return '#2ecc71';
    }
  }

  isWatched(id) {
    if (this.watched.includes(id)) {
      return 'yellow';
    }
  }

  generateReco() {
    this.generation_disabled = true;
    (document.getElementById('spinner') as HTMLInputElement).style.display = 'block';
    (document.getElementById('title') as HTMLInputElement).style.display = 'none';
    this.dataService.getRecos(this.liked, this.disliked, this.watched).subscribe(res => {
      const dialogRef = this.dialog.open(RecosComponent, {
        width: '800px',
        data: res
      }
      );
      dialogRef.afterClosed().subscribe(() => {
        this.generation_disabled = false;
        (document.getElementById('spinner') as HTMLInputElement).style.display = 'none';
        (document.getElementById('title') as HTMLInputElement).style.display = 'block';
      }
      );
    });
  }

  openInfos(mv) {
    this.dialog.open(FilmOverviewComponent, {
      width: '80vw',
      height: '80vh',
      data: mv
    });
  }

  applyFilter() {
    const wordSearch = this.filters.title;
    setTimeout(() => {
      if (wordSearch === this.filters.title) {
        this.page = 0;
        this.last_page = 0;
        this.dataService.getMovies(this.page, this.filters).subscribe(res => {
          this.movies = res;
        });
      }
    }, 200);
  }

  nextBatch(e) {
    if (this.theEnd) {
      return;
    }
    if (e > this.last_page) {
      this.last_page = e;
      this.page += 1;
      this.loading = true;
      this.dataService.getMovies(this.page, this.filters).subscribe(res => {
        this.movies.push(...res);
        this.loading = false;
      });
    }
  }

  trackByIdx(i) {
    return i;
  }

}
