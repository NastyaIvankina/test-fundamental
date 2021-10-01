
export interface ProductItem {
    CurrencyCode: string,  
    Id: string,
    StockQuantity: number,
    Name: string,
    Description: string,
    SubCategoryId: string,
    SubCategoryName: string,
    MainCategoryId: string,
    MainCategoryName: string,
    SupplierId: string,
    SupplierName: string,
    LastModified: string, //edm datetime
    Price: number, //decimal
    DimensionHeight: number, //decimal
    DimensionWidth: number, //decimal
    DimensionDepth: number, //decimal
    DimensionUnit: string,
    ImageUrl: string,
    QuantityUnit: string, 
    MeasureUnit: string,
    AverageRating: number, //decimal
    RatingCount: number, //int32,
    WeightMeasure: number, //decimal
    WeightUnit: string
}

export interface ProductItemResponse {
        d: {
            results: [
                {
                    CurrencyCode: string,  
                    Id: string,
                    StockQuantity: number,
                    Name: string,
                    Description: string,
                    SubCategoryId: string,
                    SubCategoryName: string,
                    MainCategoryId: string,
                    MainCategoryName: string,
                    SupplierId: string,
                    SupplierName: string,
                    LastModified: string, //edm datetime
                    Price: number, //decimal
                    DimensionHeight: number, //decimal
                    DimensionWidth: number, //decimal
                    DimensionDepth: number, //decimal
                    DimensionUnit: string,
                    ImageUrl: string,
                    QuantityUnit: string, 
                    MeasureUnit: string,
                    AverageRating: number, //decimal
                    RatingCount: number, //int32,
                    WeightMeasure: number, //decimal
                    WeightUnit: string
                }
            ]
        }
}