import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  @ViewChild('gallery', { static: false }) private gallery: ElementRef<HTMLDivElement> | undefined;
  isTestDivScrolledIntoView: boolean = true;
  height: string = "200";
  width: string = "200";
  items: string[] = [];
  totalItems: number = 49;
  items2: string[] = [];
  items3: string[] = [];

  @HostListener('window:scroll', ['$event'])
  isScrolledIntoView() {
    if (this.gallery) {
      const rect = this.gallery.nativeElement.getBoundingClientRect();
      // const topShown = rect.top >= 0;
      const bottomShown = rect.bottom <= window.innerHeight;
      // this.isTestDivScrolledIntoView = topShown && bottomShown;
      this.isTestDivScrolledIntoView = bottomShown;
    }
  }

  constructor() {
  }

  ngOnInit() {
    let i = 1;
    while (i <= this.totalItems) {
      if(i<=10)
      this.items.push(`https://source.unsplash.com/random/?Animals&${i}`);
      if(i>10 && i<=20)
      this.items2.push(`https://source.unsplash.com/random/?Animals&${i}`);
      if(i>20 && i<=30)
      this.items3.push(`https://source.unsplash.com/random/?Animals&${i}`);
      i++;
    }
  }

}
