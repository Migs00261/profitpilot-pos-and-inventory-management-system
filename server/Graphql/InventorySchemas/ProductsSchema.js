import { 
    GraphQLObjectType,
    GraphQLID,
    GraphQLString, 
    GraphQLInt
    
} from 'graphql';

export const ProductsType = new GraphQLObjectType({
    name:'products',
    fields:()=>({
        id:{type:GraphQLID},
        product:{type:GraphQLString},
        image:{type:GraphQLString},
        type:{type:GraphQLString},
        category:{type:GraphQLString},
        salePrice:{type:GraphQLInt},
        purchasePrice:{type:GraphQLInt},
        stockUnit:{type:GraphQLInt},
        warehouse:{type:GraphQLString},
        
    })
})
