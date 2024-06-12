import { 
    GraphQLObjectType,
    GraphQLID,
    GraphQLString, 
    GraphQLSchema, 
    GraphQLList,
    GraphQLNonNull,
    GraphQLEnumType
} from 'graphql';

import { ProductsType } from '../../Graphql/InventorySchemas/ProductsSchema.js';
import InventoryProduct from '../../models/InventoryModels/Products.model.js'

export const InventoryProductQuery = new GraphQLObjectType({
    name:'InventoryProductRootQuery',
    fields:{
        InventoryProducts:{
            type:new GraphQLList(ProductsType),
            resolve(parent,args){
                return InventoryProduct.find()
            }
        }
        
    }
})

