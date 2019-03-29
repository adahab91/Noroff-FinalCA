import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from "@angular/router";
import "rxjs";
//import { FormGroup, FormControl } from '@angular/forms';

import { MtgcardsService } from "./../../services/mtgcards.service";


@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
  providers: [MtgcardsService],
})
export class DashboardPageComponent implements OnInit, OnChanges {
  hasImage: Boolean = true;
  public mtgCardsArray: Array<any>;
  public searchArray: Array<any>;
  public searchInput: String;

  constructor(protected router: Router, protected MtcardsService: MtgcardsService) { }

  ngOnInit() {
    this.MtcardsService.getCards()
    .subscribe(
      myCard => {
        this.mtgCardsArray = myCard.cards;
        this.searchArray = myCard.cards;
        console.log(this.mtgCardsArray, "this is the cards array");
        console.log(this.searchArray, "this is the search array");
      });
  }
  ngOnChanges(changes: SimpleChanges) {
    
  }
  applyFilter(filter: String) {
    this.searchArray = this.mtgCardsArray.filter(item => {
          if (item.name.toString().toLowerCase().indexOf(filter.toLowerCase()) !== -1) {
            return true;
          }
        return false;
      } 
    );
  }
}
