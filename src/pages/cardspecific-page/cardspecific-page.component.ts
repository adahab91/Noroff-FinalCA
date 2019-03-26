import { Component, OnInit } from '@angular/core';
import { CardspecificService } from "../../services/cardspecific.service";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import "rxjs";


@Component({
  selector: 'app-cardspecific-page',
  templateUrl: './cardspecific-page.component.html',
  styleUrls: ['./cardspecific-page.component.scss'],
  providers: [CardspecificService]
})
export class CardspecificPageComponent implements OnInit {

  public specificCardArray: Array<any>;

  constructor(protected router: Router, protected CardspecificService: CardspecificService) { }

  ngOnInit() {
    this.CardspecificService.getSpecificCard()
    .subscribe( 
      myCard => {
        this.specificCardArray = myCard.cards;
        
        console.log(this.specificCardArray, "this is the cards array");
      });
  }
}

