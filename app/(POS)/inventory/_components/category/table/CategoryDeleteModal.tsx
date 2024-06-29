"use client"
import React from 'react'
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter,useDisclosure} from "@nextui-org/react";
import { Button } from '@nextui-org/react';
import { useMutation } from "@apollo/client";
import { DELETE_CATEGORY } from '@/Graphql/Inventory/InventoryCategory';
import {toast} from "react-toastify"
import { useQueryClient } from 'react-query';
function CategoryDeleteModal({statusOnOpenChange,statusIsOpen,RowId,description,modal}:any) {
  const [deleteTheCategory,{data,loading,error:categoryerror}] = useMutation(DELETE_CATEGORY)
  const queryClient = useQueryClient()

  async function deleteCategory(){
    try {
      await deleteTheCategory({
        variables:{
          mycategoryId:RowId
        }
      })
      if(!loading){
        toast.success("category deleted successfully")
        queryClient.invalidateQueries('getInventoryCategories')

      }
      if(categoryerror){
        toast.error("We encountered an error please try again later")
      }
      
      
    } catch (error) {

      toast.error("We encountered an error please try again later")

      
    }

  }
  return (
   
        <div className="">
              <Modal isOpen={statusIsOpen} onOpenChange={statusOnOpenChange}>
              <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1">Delete Category</ModalHeader>
                  <ModalBody>
                   <p>{`Are you sure you want to delete the selected ${description}`}</p>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="danger" variant="light" onClick={()=>{
                      deleteCategory()
                      onClose()
                      
                    }}>
                      Delete
                    </Button>
                    <Button className='bg-primarycolor text-white' onPress={onClose}>
                      Cancel
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
          </div>
  
  )
}

export default CategoryDeleteModal