import { Component, Input } from '@angular/core';
import { Category } from '../../../../core/models/category.model';

@Component({
  selector: 'app-category-nav',
  templateUrl: './category-nav.component.html',
  styleUrl: './category-nav.component.scss'
})
export class CategoryNavComponent {
  @Input() categories!: Category[];
}
