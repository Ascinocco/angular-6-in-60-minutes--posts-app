import { Component, OnInit, OnChanges } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnChanges {

  currentUrl: string;

  constructor(private router: Router) {
    router.events.subscribe((navEnd: NavigationEnd) => {
      if (navEnd.url) {
        this.currentUrl = navEnd.url;
      }
    });
   }

  ngOnInit() {
    console.log('this.currentUrl', this.currentUrl);
  }

  ngOnChanges() {
    console.log('this.currentUrl', this.currentUrl);
  }
}
