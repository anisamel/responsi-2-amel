import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-Nilai',
  templateUrl: './Nilai.page.html',
  styleUrls: ['./Nilai.page.scss'],
})
export class NilaiPage implements OnInit {

  dataNilai: any = [];
  modal_tambah = false;
  modal_edit = false;
  id: any;
  pelajaran: any;
  nilai: any;

  constructor(
    public _apiService: ApiService,
    private modal:ModalController
  ){}
  
    
    
  ngOnInit() {
    this.getNilai();
  }
  getNilai(
  ) {
  this._apiService.tampil('tampilNilai.php').subscribe({
  next: (res: any) => {
  console.log('sukses', res);
  this.dataNilai = res;
  },
  
  error: (err: any) => {
  console.log(err);
  },
  })
}
reset_model() {
  this.id = null;
  this.pelajaran = '';
  this.nilai = '';
  }
  open_modal_tambah(isOpen: boolean) {
    this.modal_tambah = isOpen;
    this.reset_model();
    this.modal_tambah = true;
    this.modal_edit = false;
    }
    open_modal_edit(isOpen: boolean, idget: any) {
    this.modal_edit = isOpen;
    this.id = idget;
    console.log(this.id);
    this.ambilNilai(this.id);
    this.modal_tambah = false;
    this.modal_edit = true;
    }
  cancel() {
  this.modal.dismiss();
  this.modal_tambah = false;
  this.reset_model();
  }
  tambahNilai() {
    if (this.pelajaran != '' && this.nilai != '') {
    let data = {
    pelajaran: this.pelajaran,
    nilai: this.nilai,
    }
    this._apiService.tambah(data, '/tambahNilai.php')
    .subscribe({
    next: (hasil: any) => {
    this.reset_model();
    console.log('berhasil tambah Nilai');
    this.getNilai();
    this.modal_tambah = false;
    this.modal.dismiss();
    },
    error: (err: any) => {
    console.log('gagal tambah Nilai');
    }
    })
    } else {
    console.log('gagal tambah Nilai karena masih ada data yg kosong');
    }}
    hapusNilai(id: any) {
      this._apiService.hapus(id,
      '/hapusNilai.php?id=').subscribe({
      next: (res: any) => {
      console.log('sukses', res);
      this.getNilai();
      console.log('berhasil hapus data');
      },
      error: (error: any) => {
      console.log('gagal');
      }
      })
      }
      ambilNilai(id: any) {
        this._apiService.lihat(id,
        '/lihatNilai.php?id=').subscribe({
        next: (hasil: any) => {
        console.log('sukses', hasil);
        let Nilai = hasil;
        this.id = Nilai.id;
        this.pelajaran = Nilai.pelajaran;
        this.nilai = Nilai.nilai;
        },
        error: (error: any) => {
        console.log('gagal ambil data');
        }
        })
        }
        editNilai() {
          let data = {
          id: this.id,
          pelajaran: this.pelajaran,
          nilai: this.nilai
          }
          this._apiService.edit(data, '/editNilai.php')
          .subscribe({
          next: (hasil: any) => {
          console.log(hasil);
          this.reset_model();
          this.getNilai();
          console.log('berhasil edit Nilai');
          this.modal_edit = false;
          this.modal.dismiss();
          },
          error: (err: any) => {
          console.log('gagal edit Nilai');
          }
          })
          }
}