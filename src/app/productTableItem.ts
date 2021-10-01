export interface ProductTableItem {
    CurrencyCode: string,  
    Id: string,
    StockQuantity: number,
    Name: string,
    SubCategoryName: string,
    MainCategoryName: string,
    SupplierName: string,
    Price: number, //decimal
}

export interface ProductTableDisplayedColumn {
    key: string, 
    checked: boolean
}
