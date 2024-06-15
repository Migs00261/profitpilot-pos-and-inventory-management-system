import { gql } from "@apollo/client";

export const ADD_WAREHOUSE = gql/* GraphQL */`
mutation CREATEWAREHOUSE($myuserId:String!,$mywarehouse:String!,$myemail:String!,$myphonenumber:String!,$mycountry:String!,$mycity:String!,$myzipcode:String!){
    createWarehouse(userId:$myuserId,warehouse:$mywarehouse,email:$myemail,phone:$myphonenumber,country:$mycountry,city:$mycity,zipCode:$myzipcode){
    id
    userId
    warehouse
    phone
    country
    city
    email
    zipCode
  }
}

`
export const UPDATE_WAREHOUSE = gql/* GraphQL */`
mutation UPDATEWAREHOUSE($mywarehouseId:String!,$myuserId:String!,$mywarehouse:String!,$myemail:String!,$myphonenumber:String!,$mycountry:String!,$mycity:String!,$myzipcode:String!){
    updateWarehouse(id:$mywarehouseId,userId:$myuserId,warehouse:$mywarehouse,email:$myemail,phone:$myphonenumber,country:$mycountry,city:$mycity,zipCode:$myzipcode){
    id
    userId
    warehouse
    phone
    country
    city
    email
    zipCode
  }
}

`
export const GET_WAREHOUSES = gql/* GraphQL */`
query WAREHOUSES($userId:String!){
    warehouses(userid:$userId){
    id
    userId
    warehouse
    phone
    country
    city
    email
    zipCode
  }
}

`
export const GET_SINGLE_WAREHOUSE = gql/* GraphQL */`
query WAREHOUSE($warehouseId:String!){
    warehouse(id:$warehouseId){
    id
    userId
    warehouse
    phone
    country
    city
    email
    zipCode
  }
}

`


