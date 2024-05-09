import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { RegisteredComponent } from './pages/registered/registered.component';
import { AdminComponent } from './pages/admin/admin.component';
import { GuestComponent } from './pages/guest/guest.component';
import { ConfigureComponent } from './pages/configure/configure.component';
import { SharedModule } from '../shared/shared.module';
import { HomeModule } from '../modules/home/home.module';
import { ConfigureModule } from '../modules/configure/configure.module';

@NgModule({
  declarations: [
    RegisteredComponent,
    AdminComponent,
    GuestComponent,
    ConfigureComponent,
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SharedModule,
    HomeModule,
    ConfigureModule,
  ],
})
export class LayoutModule {}
