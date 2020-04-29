import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getRecos(liked, disliked, watched) {
    const url = environment.api + '/reco';
    const data = { liked, disliked, watched };
    return this.http.post<any>(url, data);
  }

  getMovies(page, filters) {
    const url = environment.api + '/movies/' + page;
    return this.http.post<any>(url, filters);
  }

  getUser(email) {
    const url = environment.api + '/users/' + email;
    return this.http.get<any>(url, httpOptions);
  }

  getTrailer(title) {
    const url = environment.api + '/movies/trailer/' + title;
    return this.http.get<any>(url, httpOptions);
  }
}
