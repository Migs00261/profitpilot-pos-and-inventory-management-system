import { gql } from "@apollo/client";

export const CREATE_UNIT = gql/* GraphQL */`
mutation CREATEUNIT($myuserId:String!,$myunit:String!,$myshortName:String!,$mybaseUnit:String!,$myoperator:String!,$myoperatorValue:String!){
    createUnit(userId:$myuserId,unit:$myunit,shortName:$myshortName,baseUnit:$mybaseUnit,operator:$myoperator,operatorValue:$myoperatorValue){
        id
        userId
        unit
        shortName
        baseUnit
        operator
        operatorValue
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
export const GET_UNITS = gql/* GraphQL */`
query GETUNITS($userId:String!){
    units(userId:$userId){
        id
        userId
        unit
        shortName
        baseUnit
        operator
        operatorValue
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


