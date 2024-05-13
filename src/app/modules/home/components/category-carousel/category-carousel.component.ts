import { Component, Input } from '@angular/core';
import { Category } from '../../../../core/models/category.model';

@Component({
  selector: 'app-category-carousel',
  templateUrl: './category-carousel.component.html',
  styleUrl: './category-carousel.component.scss'
})
export class CategoryCarouselComponent {
  @Input() categories!: Category[]
}
