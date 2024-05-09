import { Product } from './product.model';

export interface ProductResponse {
  apiStatus: Object;
  contextId: string;
  correlationId: string;
  result: Product;
}
