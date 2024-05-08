import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { CategoryResponse } from '../../models/category-response.model';
import { HttpClient } from '@angular/common/http';
import { Category } from '../../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CatagoryService {


  constructor(private httpClient: HttpClient) { 

  }

  getCategories(): Observable<Category[]> {
    return this.httpClient.get<Category[]>('assets/data/categories.json');
  }
}
