import { Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PortfolioItemComponent } from './portfolio/portfolio-item/portfolio-item.component';


export const routes: Routes = [
    { path: '', component: PortfolioComponent},
    { path: 'about-me', component: AboutMeComponent},
    { path: 'portfolio', component: PortfolioComponent},
    { path: 'portfolio/:weblink', component: PortfolioItemComponent}
];
