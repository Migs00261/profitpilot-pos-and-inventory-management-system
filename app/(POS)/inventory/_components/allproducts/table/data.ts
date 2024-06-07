import React from "react";
const columns = [
  {name: "Id", uid: "id"},
  {name: "PRODUCT", uid: "product", sortable: true},
  {name: "IMAGE", uid: "image", sortable: true},
  {name: "TYPE", uid: "type", sortable: true},
  {name: "CATEGORY", uid: "category", sortable: true},
  {name: "BRAND", uid: "brand", sortable: true },
  {name: "SALE PRICE", uid: "saleprice", sortable: true},
  {name: "PURCHASE PRICE", uid: "purchaseprice" , sortable: true},
  {name: "CURRENT STOCK", uid: "currentstock" , sortable: true},
  {name: "WAREHOUSE", uid: "warehouse" , sortable: true},
  {name: "STATUS", uid: "status", sortable: true},
  {name: "ACTION", uid: "actions"},
];

const statusOptions = [
  {name: "Instock", uid: "instock"},
  {name: "Outofstock", uid: "outofstock"},
];

const users = [
  {
    id: 1,
    product: "Television",
    image: "image1",
    type:"single",
    category:"electronics",
    brand:"samsung",
    saleprice:"14000",
    purchaseprice:"13000",
    currentstock:"234",
    status: "instock",
    warehouse:"warehouse2"

  },
  {
    id: 2,
    product: "microwave",
    image: "image1",
    type:"single",
    category:"electronics",
    brand:"samsung",
    email:"xyvielyons@gmail.com",
    saleprice:"14000",
    purchaseprice:"13000",
    currentstock:"234",
    status: "outofstock",
    warehouse:"warehouse2"

  },
  {
    id: 3,
    product: "Television",
    image: "image1",
    type:"single",
    category:"electronics",
    brand:"samsung",
    email:"xyvielyons@gmail.com",
    saleprice:"14000",
    purchaseprice:"13000",
    currentstock:"234",
    status: "instock",
    warehouse:"warehouse2"

  },
  
];

export {columns, users, statusOptions};
