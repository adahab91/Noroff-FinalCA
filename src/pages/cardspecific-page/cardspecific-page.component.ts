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

  constructor(protected router: Router, protected CardspecificService: CardspecificService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      const urlId = params['id'];
      console.log(urlId, "this is urlId");
    

    this.CardspecificService.getSpecificCard(urlId).subscribe(myCard => {
        this.specificCardArray = myCard.cards;
        console.log(myCard, "this is myCard");
        console.log(urlId, "this is urlId");
        console.log(this.specificCardArray, "this is the cards array");
      })
    })
  } 
}
