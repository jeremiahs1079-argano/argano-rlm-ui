import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { UserDisplayComponent } from './components/user-display/user-display.component';




@NgModule({
  declarations: [
    NotFoundComponent,
    HeaderComponent,
    UserDisplayComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HeaderComponent
  ]
})
export class SharedModule { }
