import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { MtgcardsService } from "./../../services/mtgcards.service";
import "rxjs";


@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
  providers: [MtgcardsService],
})
export class DashboardPageComponent implements OnInit {

  public mtgCardsArray: Array<any>;

  constructor(protected router: Router, protected MtcardsService: MtgcardsService) { }

  ngOnInit() {
    this.MtcardsService.getCards()
    .subscribe(
      myCard => {
        this.mtgCardsArray = myCard.cards;
        console.log(this.mtgCardsArray, "this is the cards array");
      });
  }
}
