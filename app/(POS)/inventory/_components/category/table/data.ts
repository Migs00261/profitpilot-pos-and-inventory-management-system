import React from "react";
const columns = [
  {name: "Id", uid: "id"},
  {name: "CATEGORY", uid: "category", sortable: true},
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
    category: "electronics",
    description:"electronic appliances",
    

  },
  {
    id: 2,
    category: "electronics",
    description:"electronic appliances",
    

  },
  {
    id: 3,
    category: "electronics",
    description:"electronic appliances",
    

  },
 
  
  
];

export {columns, users, statusOptions};
