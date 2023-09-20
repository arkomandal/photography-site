import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  height: string = "200";
  width: string = "200";
  items: string[] = [];
  totalItems: number = 49;

  constructor() {

  }

  ngOnInit() {
    let i = 1;
    while (i <= this.totalItems) {
      this.items.push(`https://source.unsplash.com/random/?Animals&${i}`);
      i++;
    }
  }
  
}
