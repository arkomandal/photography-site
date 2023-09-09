import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  height: string = "400";
  width: string = "400";
  item: string = "https://source.unsplash.com/random/?Animals&1";
}
