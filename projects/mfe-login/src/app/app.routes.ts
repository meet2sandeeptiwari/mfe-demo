import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { loadRemoteModule } from '@angular-architects/native-federation';

export const routes: Routes = [
  {
    path: '',
    component: Login,
  },
];
