import React from "react";
const columns = [
  {name: "Id", uid: "id"},
  {name: "PRODUCTNAME", uid: "productname", sortable: true},
  {name: "VALUES", uid: "values", sortable: true},
  {name: "ACTION", uid: "actions"},
];

const statusOptions = [
  {name: "Instock", uid: "instock"},
  {name: "Outofstock", uid: "outofstock"},
];

const users = [
  {
    id: 1,
    productname: "electronics",
    values:"23,24,25",
    

  },
  
 
  
  
];

export {columns, users, statusOptions};
