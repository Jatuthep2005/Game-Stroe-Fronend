import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

type Game = { id: number; title: string; cover: string };

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './profile.html',
  styleUrls: ['./profile.scss'],
})
export class Profile implements OnInit {
  user: any = null;
  loading = true;

  games: Game[] = [
    { id: 1, title: 'Roblox', cover: '/images/games/roblox.png' },
    { id: 2, title: 'Five M', cover: '/images/games/fivem.png' },
    { id: 3, title: 'FC 25', cover: '/images/games/fc25.jpg' },
    { id: 4, title: 'Red Dead II', cover: '/images/games/rdr2.jpg' },
    { id: 5, title: 'Valorant', cover: '/images/games/valorant.png' },
    { id: 6, title: 'Call of Duty', cover: '/images/games/cod.jpg' },
    { id: 7, title: 'GROUNDED', cover: '/images/games/grounded.jpg' },
    { id: 8, title: 'GROUNDED 2', cover: '/images/games/grounded2.jpg' },
  ];

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit() {
    const storedUser = localStorage.getItem('user');

    if (!storedUser) {
      alert('กรุณาเข้าสู่ระบบก่อน');
      this.router.navigate(['/login']);
      return;
    }

    const user = JSON.parse(storedUser);
    console.log('📦 ดึงข้อมูลจาก localStorage:', user);

    // ✅ เรียกข้อมูลจริงจาก Node.js
    this.http.get(`http://localhost:3000/profile/${user.id}`).subscribe({
      next: (res: any) => {
        this.user = res.user;
        this.loading = false;
        console.log('✅ โหลดโปรไฟล์สำเร็จ:', this.user);
      },
      error: (err) => {
        console.error('❌ โหลดข้อมูลไม่สำเร็จ:', err);
        alert('โหลดข้อมูลไม่สำเร็จ ❌');
        this.loading = false;
      },
    });
  }

  goTopup() {
    this.router.navigate(['/profile/topup']);
  }

  goPurchaseHistory() {
    this.router.navigate(['/orders']);
  }

  goTopupHistory() {
    this.router.navigate(['/wallet/history']);
  }

  openGameDetail(g: Game) {
    this.router.navigate(['/games', g.id]);
  }

  openEditProfile() {
    this.router.navigate(['/profile/edit']);
    console.log('📝 เปิดหน้าแก้ไขโปรไฟล์');
  }
}
