"use client";
import { FileInput, Label } from "flowbite-react";
import { useState } from "react";
import { storage,ID } from "@/app/appWrite";
import {Progress} from "@nextui-org/react";
import Image from "next/image";
import { toast } from "react-toastify";
function Dropzone({onUrlSend}:any) {
  const [progress,setProgress] = useState<any>(null)
  const [fileUrl,setFileUrl] = useState<any>(null)
  
  onUrlSend(fileUrl)


  async function handleFileInput(e:any){
     e.preventDefault()
    
     try{
      const sendToStorage = await storage.createFile('6676cf32002d4f4a870e',ID.unique(),e.target.files[0],[],(status)=>{
        const chunks = status.chunksTotal
        const percentagePerChunk = 100/chunks
        const currentChunkUploading = status.chunksUploaded
        const percentage = percentagePerChunk * currentChunkUploading
        setProgress(percentage)

         

      })
      console.log(sendToStorage.$id)
      setProgress(true)

      if(sendToStorage){
        setProgress(false)
        toast.success('image uploaded successfully')
        const getFilePreview = await storage.getFilePreview('6676cf32002d4f4a870e',sendToStorage.$id)
        console.log(getFilePreview)
        setFileUrl(getFilePreview.href)
     

      }

     }catch(error:any){
      if(error.message = "File size not allowed"){
        toast.error("30mb maximum size image allowed")

      }else{
        toast.error("something went wrong")
      }
      
      console.log(error)

     }

  }
  return (
    <div>
       {!progress && <div className="flex w-full items-center justify-center">
      <Label
        htmlFor="dropzone-file"
        className="flex h-50 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-blue-200 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
      >
        <div className="">
          
          
          {!fileUrl && <div className="flex flex-col items-center justify-center pb-6 pt-5">
          <svg
            className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 16"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
            />
            </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> or drag and drop
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
          </div>}
          {fileUrl &&
            <div className="w-full">
              <Image className="h-[200px]" src={fileUrl} width={500} height={200} alt="brand image" ></Image>
            </div>
          }
          
        </div>
        <FileInput onChange={handleFileInput} id="dropzone-file" className="hidden" />
      </Label>
    </div>}
    {progress && <Progress
      aria-label="Downloading..."
      size="sm"
      value={progress}
      isStriped
      color="primary"
      showValueLabel={true}
      className="max-w-md"
    />}
    </div>
  )
}

export default Dropzone