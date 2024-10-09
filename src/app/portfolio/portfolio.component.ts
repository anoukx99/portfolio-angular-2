import { Component } from '@angular/core';
import { PortfolioItems } from './portfolio-items';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

  portfolioItems = PortfolioItems;
  filters = [ "Hardware", "Front-end", "All"]
  selectedFilter = "All";
  
  filterData(filter: string) {
    this.selectedFilter = filter;
  }

} 


