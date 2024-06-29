import React from "react";
const columns = [
  {name: "Id", uid: "id"},
  {name: "UNIT", uid: "unit", sortable: true},
  {name: "BASE UNIT", uid: "baseUnit", sortable: true},
  {name: "SHORT NAME", uid: "shortName", sortable: true},
  {name: "OPERATOR", uid: "operator", sortable: true},
  {name: "OPERATOR VALUE", uid: "operatorValue", sortable: true},
  {name: "ACTION", uid: "actions"},
];

const statusOptions = [
  {name: "Instock", uid: "instock"},
  {name: "Outofstock", uid: "outofstock"},
];



export {columns,statusOptions};
