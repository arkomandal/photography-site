import { Component, ElementRef, Input, OnChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnChanges {
  @Input() display: boolean = true;
  @ViewChild('navbar', { static: false }) private navbar: ElementRef<HTMLDivElement> | undefined;

  ngOnChanges() {
    if (this.display) {
      this.navbar?.nativeElement.setAttribute("style", "top: -60px");
    } else {
      this.navbar?.nativeElement.setAttribute("style", "top: 0");
    }
  }
}
