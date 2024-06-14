export const InventoryBrandTypeDef = /* GraphQL */ `
    type Brand {
        id:ID!
        brand:String
        image:String
        description:String
    }
    type Query {
        brands:[Brand]
        brand(id:ID!):Brand
    }
    type Mutation{
        updateBrand(id:ID!,brand:String,image:String,description:String):Brand
        createBrand(brand:String!,image:String!,description:String!):Brand
    }


`