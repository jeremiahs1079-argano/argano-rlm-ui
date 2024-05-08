import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigureComponent } from './components/configure/configure.component';

@NgModule({
  declarations: [ConfigureComponent],
  imports: [CommonModule],
  exports: [ConfigureComponent],
})
export class ConfigureModule {}
