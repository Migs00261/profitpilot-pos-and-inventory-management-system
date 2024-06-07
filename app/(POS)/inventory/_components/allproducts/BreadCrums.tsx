'use client'
import React from 'react'
import {Breadcrumbs, BreadcrumbItem} from "@nextui-org/react";
function BreadCrums() {
  return (
    <div className="" >
        <Breadcrumbs>
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem>Inventory</BreadcrumbItem>
            <BreadcrumbItem>AllProducts</BreadcrumbItem>
        </Breadcrumbs>
    </div>
    
  )
}

export default BreadCrums