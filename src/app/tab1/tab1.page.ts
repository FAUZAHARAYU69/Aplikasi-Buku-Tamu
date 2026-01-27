import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  standalone: true,
  imports: [
    IonicModule,
    CommonModule
  ],
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss']
})
export class Tab1Page {

  constructor(private router: Router) {}

  keInput() {
    this.router.navigate(['/tabs/tab2']);
  }

  keData() {
    this.router.navigate(['/tabs/tab3']);
  }
}
