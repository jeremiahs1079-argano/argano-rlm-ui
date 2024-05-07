import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { RegisteredComponent } from './pages/registered/registered.component';
import { AdminComponent } from './pages/admin/admin.component';
import { GuestComponent } from './pages/guest/guest.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [RegisteredComponent, AdminComponent, GuestComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SharedModule,
  ]
})
export class LayoutModule { }
