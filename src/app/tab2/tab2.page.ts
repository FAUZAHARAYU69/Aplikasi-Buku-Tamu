import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { BukuTamuService } from '../providers/buku-tamu.service';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  standalone: false
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
  ) { }

  async simpan() {
    this.bukuTamu.simpan(this.form).subscribe({
      next: async (res: any) => {
        const alert = await this.alertCtrl.create({
          header: 'Sukses',
          message: 'Data buku tamu berhasil disimpan',
          buttons: ['OK']
        });
        await alert.present();

        // Reset form
        this.form = {
          nama: '',
          alamat: '',
          no_hp: '',
          keperluan: '',
          tanggal_kunjungan: '',
          ditujukan_kepada: ''
        };
      },
      error: async () => {
        const alert = await this.alertCtrl.create({
          header: 'Error',
          message: 'Gagal menyimpan data',
          buttons: ['OK']
        });
        await alert.present();
      }
    });
  }
}
