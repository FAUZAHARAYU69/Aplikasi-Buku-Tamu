import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
  standalone: false
})
export class Tab1Page {

  constructor(private router: Router) { }

  keInput() {
    this.router.navigate(['/tabs/tab2']);
  }

  keData() {
    this.router.navigate(['/tabs/tab3']);
  }

  keTab2() {
    this.router.navigate(['/tabs/tab2']);
  }

  keTab3() {
    this.router.navigate(['/tabs/tab3']);
  }

  keTab1() {
    this.router.navigate(['/tabs/tab1']);
  }
}
