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
export const UPDATE_BRAND = gql/* GraphQL */`
mutation UPDATEBRAND($myId:String!,$myuserId:String!,$mybrand:String!,$mydescription:String!){
    updateBrand(id:$myId,userId:$myuserId,brand:$mybrand,description:$mydescription){
        id
        userId
        brand
        image
        description
  }
}`
export const DELETE_BRAND = gql/* GraphQL */`
mutation DELETEBRAND($myId:String!){
    deleteBrand(id:$myId){
        status
        message
  }
}`

export const GET_BRANDS = gql/* GraphQL */`
query GETBRANDS($myuserId:String!){
    brands(userId:$myuserId){
        id
        userId
        brand
        image
        description
    }
}

`