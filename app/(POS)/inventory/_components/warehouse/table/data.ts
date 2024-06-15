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

let users:any = [];






  






export {columns, users, statusOptions};
