'use client'
import React from "react";
import {Tabs, Tab, Chip} from "@nextui-org/react";

function ThirdTab() {
  return (
    <div className="flex w-full flex-col bg-white p-2">
      <Tabs 
        aria-label="Options" 
        color="primary" 
        variant="underlined"
        classNames={{
          tabList: "gap-6 w-full relative rounded-none p-0 ",
          cursor: "w-full bg-primarycolor",
          tab: "max-w-fit px-0 h-12",
          tabContent: "group-data-[selected=true]:text-primarycolor"
        }}
      >
        <Tab
          key="photos"
          title={
      
             
              <span>All Units</span>
             
          }
        />
        
      </Tabs>
    </div>  
  )
}

export default ThirdTab
