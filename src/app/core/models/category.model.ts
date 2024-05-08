export interface Category {
    catalogId: string;
    childCategories: Category[];
    customFields: Object;
    id: string;
    name: string;
}