import { createSchema } from "graphql-yoga";
import _ from 'lodash';
import { InventoryProductsTypeDef } from "./InventorySchemas/ProductsSchema.js";
import { InventoryProductsResolvers } from "../Controllers/Inventory/products.controller.js";
import { InventoryBrandsResolvers } from "../Controllers/Inventory/brands.controller.js";
import { InventoryBrandTypeDef } from "./InventorySchemas/BrandsSchema.js";

export const schema = createSchema({
    typeDefs:[
        InventoryProductsTypeDef,
        InventoryBrandTypeDef
    ],

    resolvers:_.merge(
        InventoryProductsResolvers,
        InventoryBrandsResolvers
    
    )
})