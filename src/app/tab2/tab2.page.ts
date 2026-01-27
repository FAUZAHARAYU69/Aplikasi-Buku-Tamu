import { Component } from '@angular/core';
import { IonicModule, AlertController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BukuTamuService } from '../providers/buku-tamu.service';

@Component({
  selector: 'app-tab2',
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule
  ],
  templateUrl: './tab2.page.html'
})
export class Tab2Page {

  form = {
    nama: '',
    alamat: '',
    no_hp: '',
    keperluan: '',
    tanggal_kunjungan: '',
    ditujukan_kepada: ''
  };

  constructor(
    private bukuTamu: BukuTamuService,
    private alertCtrl: AlertController
  ) {}

  async simpan() {
    this.bukuTamu.simpan(this.form).subscribe(async () => {
      const alert = await this.alertCtrl.create({
        header: 'Sukses',
        message: 'Data buku tamu berhasil disimpan',
        buttons: ['OK']
      });
      await alert.present();

      this.form = {
        nama: '',
        alamat: '',
        no_hp: '',
        keperluan: '',
        tanggal_kunjungan: '',
        ditujukan_kepada: ''
      };
    });
  }
}
