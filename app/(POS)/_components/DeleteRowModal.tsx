"use client"
import React from 'react'
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter,useDisclosure} from "@nextui-org/react";
import { Button } from '@nextui-org/react';
import { useMutation } from "@apollo/client";
import {toast} from "react-toastify"
import { useQueryClient } from 'react-query';

function DeleteRowModal({onOpenChange,isOpen,Id,Name,desc,graphqlquery,queryInvalidationName}:any) {
  const [deleteAction,{data,loading,error:categoryerror}] = useMutation(graphqlquery)
  const queryClient = useQueryClient()

  async function deleteCategory(){
    try {
      await deleteAction({
        variables:{
          myId:Id
        }
      })
      if(!loading){
        toast.success(`${desc} deleted successfully`)
        queryClient.invalidateQueries(queryInvalidationName)

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
              <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
              <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1">{`Delete ${desc}`}</ModalHeader>
                  <ModalBody>
                   <p>{`Are you sure you want to delete the selected ${desc} (******${Name}******)`}</p>
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

export default  DeleteRowModal