import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { BukuTamuService } from '../providers/buku-tamu.service';

@Component({
  selector: 'app-tab3',
  standalone: true,
  imports: [
    IonicModule,
    CommonModule
  ],
  templateUrl: './tab3.page.html'
})
export class Tab3Page implements OnInit {

  dataBukuTamu: any[] = [];
  loading = true;

  constructor(private bukuTamu: BukuTamuService) {}

  ngOnInit() {
    this.loadData();
  }

  loadData(event?: any) {
    this.bukuTamu.getData().subscribe(res => {
      this.dataBukuTamu = res;
      this.loading = false;
      if (event) event.target.complete();
    });
  }
}
