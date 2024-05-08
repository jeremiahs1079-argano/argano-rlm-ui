import { Component, OnInit } from '@angular/core';
import { Category } from '../../../../core/models/category.model';
import { CatagoryService } from '../../../../core/services/catagory/catagory.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  categories: Category[] = [];

  constructor(private categoryService: CatagoryService) {}

  ngOnInit(): void {
      this.categoryService.getCategories().subscribe(
        (response: Category[]) => this.categories = response.slice()
      );
  }
}
