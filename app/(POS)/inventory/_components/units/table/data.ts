import React from "react";
const columns = [
  {name: "Id", uid: "id"},
  {name: "UNIT", uid: "unit", sortable: true},
  {name: "BASE UNIT", uid: "baseunit", sortable: true},
  {name: "SHORT NAME", uid: "shortname", sortable: true},
  {name: "OPERATOR", uid: "operator", sortable: true},
  {name: "OPERATOR VALUE", uid: "operatorvalue", sortable: true},
  {name: "ACTION", uid: "actions"},
];

const statusOptions = [
  {name: "Instock", uid: "instock"},
  {name: "Outofstock", uid: "outofstock"},
];

const users = [
  {
    id: 1,
    baseunit:"kilogram",
    unit:"Grams",
    shortname:"g",
    operator:"/",
    operatorvalue:"1000"
    

  },
  {
    id: 2,
    baseunit:"kilogram",
    unit:"Grams",
    shortname:"g",
    operator:"/",
    operatorvalue:"1000"
    

  },
  
  
 
  
  
];

export {columns, users, statusOptions};
