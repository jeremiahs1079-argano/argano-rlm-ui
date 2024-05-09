import { Component, OnInit } from '@angular/core';
import { Product } from '../../../../core/models/product.model';
import { ProductService } from '../../../../core/services/product/product.service';
@Component({
  selector: 'app-configure',
  templateUrl: './configure.component.html',
  styleUrl: './configure.component.scss',
})
export class ConfigureComponent implements OnInit {
  product: Product = {
    additionalFields: [],
    attributeCategories: [],
    attributes: [],
    childProducts: [],
    configureDuringSale: '',
    description: '',
    displayUrl: '',
    id: '',
    isActive: false,
    isAssetizable: false,
    isSoldOnlyWithOtherProds: false,
    name: '',
    nodeType: '',
    prices: [],
    productClassification: { id: '' },
    productCode: '',
    productComponentGroups: [],
    productSellingModelOptions: [],
    productSpecificationType: {
      name: '',
      productSpecificationRecordType: {},
    },
    qualificationContext: { isQualified: false },
  };
  productPlaceHolder = 'productName';
  description = `The following steps will guide you through the configuration of your ${this.productPlaceHolder} service.`;

  constructor(private productService: ProductService) {}
  ngOnInit(): void {
    this.productService
      .getProduct()
      .subscribe((response: Product) => (this.product = response));
  }
  getDescription(): string {
    return this.description.replace(this.productPlaceHolder, this.product.name);
  }
  getProductName(): string {
    return this.product.name;
  }
}
