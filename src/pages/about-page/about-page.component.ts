import { Component, OnInit } from '@angular/core';
import { CardspecificService } from "../../services/cardspecific.service";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import "rxjs";

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {
  isFoo:Boolean = false;
  constructor() { }

  ngOnInit() {
  
  }
}
