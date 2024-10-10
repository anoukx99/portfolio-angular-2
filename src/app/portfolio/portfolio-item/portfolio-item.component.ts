import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { PortfolioItems } from '../portfolio-items';
import { PortfolioItem } from '../portfolio-item';

import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-portfolio-item',
  standalone: true,
  imports: [  
    RouterLink,
  ],
  templateUrl: './portfolio-item.component.html',
  styleUrl: './portfolio-item.component.scss',
})

export class PortfolioItemComponent implements OnInit, AfterViewInit {
  item$: PortfolioItem | undefined;
  private _weblink: string = "";
  slideIndex: number = 1;
  slides: NodeListOf<HTMLElement> | undefined

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
  
  ngAfterViewInit() {
    this.loadSlides();
  }


  getPortfolioItem(weblink: string) {
    return PortfolioItems.find(item => item.weblink === weblink);
  } 

  loadSlides() {
    this.slides = document.querySelectorAll('.mySlides') as NodeListOf<HTMLElement>;
    console.log(this.slides);
    this.showSlides(this.slideIndex);
  }

  showSlides(n: number) {
      let i;
      if(this.slides) {
      let dots = document.getElementsByClassName("dot");
      if (n > this.slides.length) {this.slideIndex = 1}
      if (n < 1) {this.slideIndex = this.slides.length}
      for (i = 0; i < this.slides.length; i++) {
        this.slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      this.slides[this.slideIndex - 1].style.display = "block";
      dots[this.slideIndex-1].className += " active";
    }
  }
    // Thumbnail image controls
  currentSlide(n: number) {
    this.showSlides(this.slideIndex = n);
  }

    // Next/previous controls
  plusSlides(n: number) {
    this.showSlides(this.slideIndex += n);
  }

}