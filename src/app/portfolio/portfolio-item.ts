export interface Slides {
    id: number;
    src: string;
    subtitle: string;
}

export interface PortfolioItem {
    name: string;
    description: string,
    imgUrl: string,
    expertise: string[],
    tags: string[],
    weblink: string,
    slides: Slides[],
  }