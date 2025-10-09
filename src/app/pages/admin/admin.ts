import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  imports: [],
  templateUrl: './admin.html',
  styleUrl: './admin.scss'
})
export class Admin {
[x: string]: any;
logout() {
    // ✅ ล้าง session และเปลี่ยนหน้า
    localStorage.clear();
    this['loggedUser'] = null;
    console.log('🚪 ออกจากระบบเรียบร้อย');
    this['router'].navigate(['/login']);
  }

}
