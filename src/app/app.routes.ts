import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Register } from './pages/register/register';
import { Login } from './pages/login/login';
import { Main } from './pages/main/main';
import { Profile } from './pages/profile/profile';
import { EditProfile } from './pages/edit-profile/edit-profile';
import { Topup } from './pages/topup/topup';
import { Admin } from './pages/admin/admin';



export const routes: Routes = [
    {path: '', component: Home},
    {path: 'register', component: Register},
    {path: 'login', component: Login},
    {path: 'main', component: Main},
    {path: 'profile', component: Profile},
    {path: 'profile/edit', component: EditProfile},
    {path: 'admin', component: Admin},
    {path: 'profile/topup', component: Topup},


];
