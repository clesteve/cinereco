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

  /******************************************************************************/
  /*                               GET GROUP CLASSES                            */
  /******************************************************************************/

  getMovies() {
    const url = environment.api + '/movies';
    return this.http.get<any>(url, httpOptions);
  }

}
