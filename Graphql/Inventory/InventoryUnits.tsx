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
export const DELETE_UNIT = gql/* GraphQL */`
mutation DELETEUNIT($myId:String!){
    deleteUnit(id:$myId){
        status
        message
  }
}

`
export const UPDATE_UNIT = gql/* GraphQL */`
mutation UPDATEUNIT($myId:String!,$myuserId:String!,$myunit:String,$myshortName:String,$mybaseUnit:String,$myoperator:String,$myoperatorValue:String){
    updateUnit(id:$myId,userId:$myuserId,unit:$myunit,shortName:$myshortName,baseUnit:$mybaseUnit,operator:$myoperator,operatorValue:$myoperatorValue){
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





