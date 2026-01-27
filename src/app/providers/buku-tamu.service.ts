import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BukuTamuService {

  private simpanUrl = 'http://localhost/api/simpan.php';
  private tampilUrl = 'http://localhost/api/tampil.php';

  constructor(private http: HttpClient) {}

  simpan(data: any) {
    return this.http.post(this.simpanUrl, data);
  }

  getData() {
    return this.http.get<any[]>(this.tampilUrl);
  }
}
