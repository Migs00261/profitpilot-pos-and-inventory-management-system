import { 
    GraphQLObjectType,
    GraphQLID,
    GraphQLString, 
    GraphQLSchema, 
    GraphQLList,
    GraphQLNonNull,
    GraphQLEnumType
} from 'graphql';
import { InventoryProductQuery } from "../../Controllers/Inventory/products.controller.js";

export default new GraphQLSchema({
    query:InventoryProductQuery,
    
})