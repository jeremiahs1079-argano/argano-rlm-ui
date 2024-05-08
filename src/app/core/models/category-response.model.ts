import { Category } from "./category.model";

export interface CategoryResponse {
    apiStatus: Object;
    correlationId: string;
    query: Object;
    result: Category[];
    total: number;
}