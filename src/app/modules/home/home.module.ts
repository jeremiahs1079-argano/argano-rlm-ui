import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { HomeComponent } from './components/home/home.component';
import { CarouselCardComponent } from './components/carousel-card/carousel-card.component';
import { CategoryNavComponent } from './components/category-nav/category-nav.component';
import { CategoryCarouselComponent } from './components/category-carousel/category-carousel.component';
import { HomeRoutingModule } from './home-routing.module';


@NgModule({
  declarations: [
    HomeComponent,
    CarouselCardComponent,
    CategoryNavComponent,
    CategoryCarouselComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
