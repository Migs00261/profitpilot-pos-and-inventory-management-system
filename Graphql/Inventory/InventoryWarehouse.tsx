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
export const Get_WAREHOUSE = gql/* GraphQL */`
query Warehouses($userId:String!){
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

