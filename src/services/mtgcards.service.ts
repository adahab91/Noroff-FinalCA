import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class MtgcardsService{

  constructor(private http: HttpClient) { }

  private url = "https://api.magicthegathering.io/v1/cards";
  private conversionUrl = "https://cors-anywhere.herokuapp.com/";

  getCards(): Observable<any> {
    return this.http.get(this.url).pipe(
      map(response => {
          console.log('from service',response)
          return response
      })
    );
  }
}
