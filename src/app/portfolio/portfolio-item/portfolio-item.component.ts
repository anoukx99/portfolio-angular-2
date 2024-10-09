import { Component, Input, OnInit } from '@angular/core';
import { PortfolioItems } from '../portfolio-items';
import { PortfolioItem } from '../portfolio-item';

import {
  CarouselCaptionComponent,
  CarouselComponent,
  CarouselControlComponent,
  CarouselIndicatorsComponent,
  CarouselInnerComponent,
  CarouselItemComponent,
  ThemeDirective
} from '@coreui/angular';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-portfolio-item',
  standalone: true,
  imports: [  
    ThemeDirective,
    CarouselComponent,
    CarouselCaptionComponent,
    CarouselControlComponent,
    CarouselIndicatorsComponent,
    CarouselInnerComponent,
    CarouselItemComponent,
    RouterLink,
  ],
  templateUrl: './portfolio-item.component.html',
  styleUrl: './portfolio-item.component.scss',
})

export class PortfolioItemComponent implements OnInit {
  item$: PortfolioItem | undefined;
  private _weblink: string = "";

  @Input()
  set weblink(weblink: string) {  
    this._weblink = weblink;
    this.item$ = this.getPortfolioItem(weblink);
  }

  ngOnInit() {
    if (this._weblink) {
      this.item$ = this.getPortfolioItem(this._weblink);
    }
  }

  getPortfolioItem(weblink: string) {
    return PortfolioItems.find(item => item.weblink === weblink);
  } 
}