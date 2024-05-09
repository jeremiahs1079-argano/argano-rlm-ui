import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from '../shared/pages/not-found/not-found.component';
import { AdminComponent } from './pages/admin/admin.component';
import { GuestComponent } from './pages/guest/guest.component';
import { RegisteredComponent } from './pages/registered/registered.component';
import { ConfigureComponent } from './pages/configure/configure.component';

const routes: Routes = [
  {
    path: '',
    component: RegisteredComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
  },
  {
    path: 'guest',
    component: GuestComponent,
  },
  {
    path: 'configure',
    component: ConfigureComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
