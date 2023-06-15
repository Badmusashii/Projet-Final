import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  jeux: string = '';

  loading: boolean = false;

  constructor(private http: HttpClient) {}

  searchGameOnline(jeux: string) {
    const url: string = `https://www.giantbomb.com/api/search/?api_key=ff0f7bc832f02c51f88fd2286162f40173be0d19&format=json&query=${jeux}&ressources=game`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
      'Access-Control-Allow-Headers': 'X-Requested-With,content-type',
      'Access-Control-Allow-Credentials': 'true',
    });
    this.loading = true;
    this.http
      .get(url, { headers: headers })
      .pipe(
        catchError((error) => {
          console.log('error: ', error);
          return throwError("OOOps Une erreur c'est produite!");
        })
      )
      .subscribe((data) => {
        console.log(data);
        this.loading = false;
      });
    return this.http.get(
      `https://www.giantbomb.com/api/search/?api_key=ff0f7bc832f02c51f88fd2286162f40173be0d19&format=json&query=${jeux}&ressources=game`
    );
  }
}
