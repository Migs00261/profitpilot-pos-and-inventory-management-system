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


export {columns, statusOptions};
