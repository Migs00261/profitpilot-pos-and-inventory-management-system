import React from "react";
import { getAllWarehouseData } from "@/data/InventoryTableData";
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

const getdata = async()=>{
  const data:any = await getAllWarehouseData()
  users = [...data]


}
getdata()





  






export {columns, users, statusOptions};
