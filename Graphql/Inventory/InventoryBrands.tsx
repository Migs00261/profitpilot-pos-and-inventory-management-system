import { gql } from "@apollo/client";

export const CREATE_BRAND = gql/* GraphQL */`
mutation CREATEBRAND($myuserId:String!,$mybrand:String!,$myimage:String!,$mydescription:String!){
    createBrand(userId:$myuserId,brand:$mybrand,image:$myimage,description:$mydescription){
        id
        userId
        brand
        image
        description
  }
}`