import {GraphQLError} from 'graphql'

export const graphqlErrorHandler = (name,code,status)=>{

  throw new GraphQLError(name,{
        extensions:{
            code,
            http:{
                status:status,
                headers:{
                    'x-custom-header': 'error'
                }
            }
        }
    })
    
}