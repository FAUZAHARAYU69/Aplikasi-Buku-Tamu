import { Component, OnInit } from '@angular/core';
import { BukuTamuService } from '../providers/buku-tamu.service';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  standalone: false
})
export class Tab3Page implements OnInit {

  dataBukuTamu: any[] = [];
  loading = true;

  constructor(private bukuTamu: BukuTamuService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData(event?: any) {
    this.loading = true;
    this.bukuTamu.getData().subscribe({
      next: (res: any) => {
        this.dataBukuTamu = res;
        this.loading = false;

        // Complete refresh event if exists
        if (event) {
          event.target.complete();
        }
      },
      error: () => {
        this.loading = false;

        // Complete refresh event if exists
        if (event) {
          event.target.complete();
        }
      }
    });
  }
}
