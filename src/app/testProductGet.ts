export interface TestProductGetResponse{
    d: {
        results: [
            {
                Name: string;
                Description: string;
            }
        ]
    }
}

export interface TestProductGet{
    Name: string;
    Description: string;
}