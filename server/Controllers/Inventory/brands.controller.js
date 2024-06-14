import BrandsModel from '../../models/InventoryModels/Brands.model.js'
import { graphqlErrorHandler } from '../../utils/GraphqlErrorHandling.js'
export const InventoryBrandsResolvers = {
    Query:{
        brands:async(obj,args,context)=>{
           
                const getallbrands = await BrandsModel.find()
                if(!getallbrands){
                  return graphqlErrorHandler("error fetching brands","Internal server error 500",500)
                }
                return getallbrands;

            
            
        },

        brand:async(obj,args,context)=>{
      
                const getsinglebrand = await BrandsModel.findById(args.id)
                if(!getsinglebrand){
                    return graphqlErrorHandler('error fetching brand',"Internal server error",500)
                }


                return getsinglebrand;
                
         
        }

    },
    Mutation:{
        updateBrand:async(obj,args,context)=>{
            
                const updatebrand = await BrandsModel.findByIdAndUpdate(args.id,{
                    brand:args.brand,
                    image:args.image,
                    description:args.description

                })
                if(!updatebrand){
                  return graphqlErrorHandler('error updating brands','internal server error',500)
                }

                const getBrand = await BrandsModel.findById(args.id)
                
                return getBrand

           
          


        },
        createBrand:async(obj,args,context)=>{
           
                const lookforduplicate = await BrandsModel.findOne({brand:args.brand})
                if(lookforduplicate){
                    return graphqlErrorHandler('the brand name is a duplicate',"Internal server error",500)

                }

                const createBrand = new BrandsModel({
                    brand:args.brand,
                    image:args.image,
                    description:args.description
    
                })
               
                await createBrand.save()
                
                if(!createBrand){
                    return graphqlErrorHandler('error creating brand',"Internal server error",500)
                }
    
                return createBrand


           
            

        }

    }
}