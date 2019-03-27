import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import {Router, ActivatedRoute, Params} from '@angular/router';
import {OnInit, Component} from '@angular/core';


@Injectable({
  providedIn: 'root'
})


export class CardspecificService implements OnInit {
  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // Note: Below 'queryParams' can be replaced with 'params' depending on your requirements
    this.activatedRoute.params.subscribe(params => {
        const urlId = params['id'];
        console.log(urlId, "this is urlID");
      });
  }
  private url = "https://api.magicthegathering.io/v1/cards/" + urlId;
  private conversionUrl = "https://cors-anywhere.herokuapp.com/";

  
  getSpecificCard(): Observable<any> {
    return this.http.get(this.url).pipe(
      map(response => {
          console.log('from service',response)
          return response
      })
    );
  }
}
