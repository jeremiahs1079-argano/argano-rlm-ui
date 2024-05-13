interface AttributePickListValue {
  code: string;
  displayValue: string;
  id: string;
  isBooleanValue: boolean;
  name: string;
  sequence: number;
  textValue: string;
}

interface AttributePickList {
  id: string;
  values: AttributePickListValue[];
}

interface Attribute {
  attributeCategoryId: string;
  attributeNameOverride: string;
  attributePickList?: AttributePickList;
  dataType: string;
  defaultValue: string;
  hidden: boolean;
  id: string;
  isCloneable: boolean;
  isConfigurable: boolean;
  isPriceImpacting: boolean;
  isReadOnly: boolean;
  isRequired: boolean;
  label: string;
  name: string;
  status: string;
}

interface AttributeCategory {
  code: string;
  name: string;
  records: Attribute[];
}

interface PriceModel {
  id: string;
  name: string;
  pricingModelType: string;
}

interface Price {
  isDefault: boolean;
  isSelected: boolean;
  price: number;
  priceBookEntryId: string;
  priceBookId: string;
  pricingModel: PriceModel;
}

interface ProductClassification {
  id: string;
}

interface ProductSellingModel {
  id: string;
  name: string;
  sellingModelType: string;
  status: string;
}

interface ProductSellingModelOption {
  id: string;
  productId: string;
  productSellingModel: ProductSellingModel;
  productSellingModelId: string;
}

interface ProductSpecificationType {
  name: string;
  productSpecificationRecordType: any;
}

interface QualificationContext {
  isQualified: boolean;
}

export interface Product {
  additionalFields: any[];
  attributeCategories: AttributeCategory[];
  attributes: any[];
  childProducts: any[];
  configureDuringSale: string;
  description: string;
  displayUrl: string;
  id: string;
  isActive: boolean;
  isAssetizable: boolean;
  isSoldOnlyWithOtherProds: boolean;
  name: string;
  nodeType: string;
  prices: Price[];
  productClassification: ProductClassification;
  productCode: string;
  productComponentGroups: [];
  productSellingModelOptions: ProductSellingModelOption[];
  productSpecificationType: ProductSpecificationType;
  qualificationContext: QualificationContext;
}
