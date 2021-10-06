export interface ProductTableItem {
    CurrencyCode: string,  
    Id: string,
    StockQuantity: number,
    Name: string,
    SubCategoryName: string,
    MainCategoryName: string,
    SupplierName: string,
    Price: number, //decimal,
    AverageRating: number, //decimal
}

export interface ProductTableResponse {
    d: {
        results: [
            {
                CurrencyCode: string,  
                Id: string,
                StockQuantity: number,
                Name: string,
                SubCategoryName: string,
                MainCategoryName: string,
                SupplierName: string,
                Price: number, //decimal
                AverageRating: number, //decimal
            }
        ]
    }
}

export interface ProductTableDisplayedColumn {
    key: string, 
    columnName: string,
    checked: boolean
}

export interface displayedColumns {
    key: string,
    columnNamr: string
}

export const ProductColumnNames = [
    { key : "Id",
      columnName: "Identifier" },
    { key : "Name",
      columnName: "Product"},
    { key : "MainCategoryName",
      columnName: "Category" },
    { key : "SubCategoryName",
      columnName: "Sub Category" },
    { key : "SupplierName",
      columnName: "Supplier" },
    { key : "StockQuantity",
      columnName: "Availability" },
    { key : "AverageRating",
      columnName: "Average Rating" },
    { key : "Price",
      columnName: "Price" }
]



