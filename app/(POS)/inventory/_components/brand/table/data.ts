import React from "react";
const columns = [
  {name: "Id", uid: "id"},
  {name: "BRAND", uid: "brand", sortable: true},
  {name: "IMAGE", uid: "image", sortable: true},
  {name: "DESCRIPTION", uid: "description", sortable: true},
  {name: "ACTION", uid: "actions"},
];

const statusOptions = [
  {name: "Instock", uid: "instock"},
  {name: "Outofstock", uid: "outofstock"},
];

const users = [
  {
    id: 1,
    brand: "Television",
    image: "image1",
    description:"an expensive unique television",
    

  },
  {
    id: 2,
    brand: "Television",
    image: "image1",
    description:"an expensive unique television",
    

  },
  {
    id: 3,
    brand: "Television",
    image: "image1",
    description:"an expensive unique television",
    

  },
  
  
];

export {columns, users, statusOptions};
