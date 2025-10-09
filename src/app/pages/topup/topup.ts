import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topup',
  templateUrl: './topup.html',
  styleUrls: ['./topup.scss']
})
export class Topup {
  wallet = {
    name: 'True Money Wallet',
    number: '084 321 9436',
    owner: 'นาย สมสุข จิกกะดุ๊ย'
  };

  presets = [100, 200, 300, 500, 1000];
  amount = 0;
  custom: number | null = null;
  error = '';

  constructor(private router: Router) {}

  selectPreset(p: number){
    this.amount = p;
    this.custom = null;
    this.error = '';
  }

  onCustomChange(){
    this.amount = Number(this.custom) || 0;
    this.error = (this.amount <= 0) ? 'กรุณากรอกจำนวนมากกว่า 0' : '';
  }

  canSubmit(){ return this.amount > 0 && !this.error; }

  submitTopup(){
    if (!this.canSubmit()) return;
    // TODO: call API topup (.NET) ส่งจำนวน this.amount และช่องทาง wallet
    console.log('Topup amount:', this.amount);
    alert(`ดำเนินการเติมเงิน ${this.amount.toLocaleString()} บาท`);
    this.router.navigate(['/profile']);
  }

  cancel(){ this.router.navigate(['/profile']); }
  goBack(){ window.history.back(); }
}
