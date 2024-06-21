import {GraphQLClient} from 'graphql-request'
import { useQuery } from 'react-query'
export const ReactGQLQuery = (key:any,query:any,variables?:any,config={})=>{
       const endpoint = 'http://localhost:5001/graphql'
       const headers = {
           headers:{
               authorization:`bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjcwNWM2NDFmODliMDdlYTNjYTkzZTkiLCJSb2xlIjoiQURNSU4iLCJpYXQiOjE3MTg2Mzk4MzF9.WP3rzq7GmTFp0ukktRQUx04zVf0i8OPb6h-ylTHN4TQ`
           }
       }

       const graphQLClient = new GraphQLClient(endpoint,headers)

       //const fetchData = async()=> await request(endpoint,query,variables)
       const fetchData = async()=> await graphQLClient.request(query,variables)

       return useQuery(key,fetchData,config)

 }