import React from "react";
const columns = [
  {name: "Id", uid: "id"},
  {name: "WAREHOUSE", uid: "warehouse", sortable: true},
  {name: "PHONE", uid: "phone", sortable: true},
  {name: "COUNTRY", uid: "country", sortable: true},
  {name: "EMAIL", uid: "email", sortable: true},
  {name: "ZIP CODE", uid: "zipcode", sortable: true},
  {name: "ACTION", uid: "actions"},
];

const statusOptions = [
  {name: "Instock", uid: "instock"},
  {name: "Outofstock", uid: "outofstock"},
];

const users = [
  {
    id: 1,
    warehouse: "warehouse one",
    phone:"+2547836889",
    country:"kenya",
    email:"xyvielyons@gmail.com",
    zipcode:"00232"
    

  },
  
 
  
  
];

export {columns, users, statusOptions};
