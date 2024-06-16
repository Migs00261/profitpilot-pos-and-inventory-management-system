import {GraphQLClient} from 'graphql-request'
import { useQuery } from 'react-query'
export const ReactGQLQuery = (key:any,query:any,variables?:any,config={})=>{
       const endpoint = 'http://localhost:5001/graphql'
       const headers = {
           headers:{
               authorization:`bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjZlZjA5ODVlODc3MzY3YzE5YTNkYTIiLCJpYXQiOjE3MTg1NDY1ODR9.6bY0J37b155NNVxmUstdt9-P7jlWPfkyBAXZ6uzB54Y`
           }
       }

       const graphQLClient = new GraphQLClient(endpoint,headers)

       //const fetchData = async()=> await request(endpoint,query,variables)
       const fetchData = async()=> await graphQLClient.request(query,variables)

       return useQuery(key,fetchData,config)

 }