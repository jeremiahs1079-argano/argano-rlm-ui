import { Component, Input } from '@angular/core';
import { Category } from '../../../../core/models/category.model';

@Component({
  selector: 'app-carousel-card',
  templateUrl: './carousel-card.component.html',
  styleUrl: './carousel-card.component.scss'
})
export class CarouselCardComponent {

  @Input() category: Category;

  constructor() {
    this.category = {
      catalogId: '',
      childCategories: [],
      customFields: {},
      id: '',
      name: 'Test'
    }
  }

}