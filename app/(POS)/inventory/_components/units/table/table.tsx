'use client'
import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Input,
  Button,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Chip,
  User,
  Pagination,
  Selection,
  ChipProps,
  SortDescriptor
} from "@nextui-org/react";
import {PlusIcon} from "./PlusIcon";
import {VerticalDotsIcon} from "./VerticalDotsIcon";
import { ChevronDownIcon } from "./ChevronDownIcon";
import {SearchIcon} from "./SearchIcon";
import {columns,statusOptions} from "./data";
import {capitalize} from "./utils";
import { useAppDispatch } from "@/redux/hooks/hooks";
import { sidebarinventoryunitsdrawertrigger } from "@/redux/slices/sidebarInventoryUnitsDrawerSlice";
import { ReactGQLQuery } from "@/lib/reactquerycomponent";
import { useCurrentUser } from "@/hooks/use-current-user";
import { GET_UNITS } from "@/Graphql/Inventory/InventoryUnits";

import { DELETE_UNIT } from "@/Graphql/Inventory/InventoryUnits";
import {useDisclosure} from "@nextui-org/react";
import DeleteRowModal from "@/app/(POS)/_components/DeleteRowModal";
import { MdDelete } from "react-icons/md";
import { MdModeEditOutline } from "react-icons/md";
import {toast} from "react-toastify"
import UnitEditModal from "./UnitEditModal";

const statusColorMap: Record<string, ChipProps["color"]> = {
  instock: "success",
  outofstock: "danger",
};
let users:any = []

const INITIAL_VISIBLE_COLUMNS = ["unit","baseUnit","shortName","operator","operatorValue","actions"];

type User = typeof users[0];

export default function TableComponent() {
  const [filterValue, setFilterValue] = React.useState("");
  const [selectedKeys, setSelectedKeys] = React.useState<Selection>(new Set([]));
  const [visibleColumns, setVisibleColumns] = React.useState<Selection>(new Set(INITIAL_VISIBLE_COLUMNS));
  const [statusFilter, setStatusFilter] = React.useState<Selection>("all");
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [unitData,setUnitData] = React.useState();

  const {isOpen:editModalIsOpen, onOpen:editModalOnOpen, onOpenChange:editModalOpenChange} = useDisclosure();

  const [sortDescriptor, setSortDescriptor] = React.useState<SortDescriptor>({
    column: "currentstock",
    direction: "ascending",
  });

  const [unitId,setUnitId] = React.useState();
  const [unitName,setUnitName] = React.useState();

  const dispatch = useAppDispatch()
  function openDrawer(){
    dispatch(sidebarinventoryunitsdrawertrigger())
  }
  function getUnitData(myUnitId:any,myUnitName:any){
    setUnitId(myUnitId)
    setUnitName(myUnitName)
  }

  const currentUser = useCurrentUser()
  
  
  
  const {data,isLoading,error} = ReactGQLQuery('getUnits',GET_UNITS,{
    userId:currentUser?.id
  },{
    refetchInterval:20000
  })
  const mydata:any = data
  if(mydata){
    const unitData = mydata?.units
    
   if(!isLoading && !error){
    users = [...unitData]
   }


  }
  if(error){
    toast.error("error fetching units")
  }

  const [page, setPage] = React.useState(1);

  const hasSearchFilter = Boolean(filterValue);

  const headerColumns = React.useMemo(() => {
    if (visibleColumns === "all") return columns;

    return columns.filter((column) => Array.from(visibleColumns).includes(column.uid));
  }, [visibleColumns]);

  const filteredItems = React.useMemo(() => {
    let filteredUsers = [...users];

    if (hasSearchFilter) {
      filteredUsers = filteredUsers.filter((user) =>
        user.unit.toLowerCase().includes(filterValue.toLowerCase()),
      );
    }
    // if (statusFilter !== "all" && Array.from(statusFilter).length !== statusOptions.length) {
    //   filteredUsers = filteredUsers.filter((user) =>
    //     Array.from(statusFilter).includes(user.status),
    //   );
    // }

    return filteredUsers;
  }, [users, filterValue]);

  const pages = Math.ceil(filteredItems.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);

  const sortedItems = React.useMemo(() => {
    return [...items].sort((a: User, b: User) => {
      const first = a[sortDescriptor.column as keyof User] as number;
      const second = b[sortDescriptor.column as keyof User] as number;
      const cmp = first < second ? -1 : first > second ? 1 : 0;

      return sortDescriptor.direction === "descending" ? -cmp : cmp;
    });
  }, [sortDescriptor, items]);

  const renderCell = React.useCallback((user: User, columnKey: React.Key) => {
    const cellValue = user[columnKey as keyof User];

    switch (columnKey) {
      // case "name":
      //   return (
      //     <User
      //       avatarProps={{radius: "lg", src: user.avatar}}
      //       description={user.email}
      //       name={cellValue}
      //     >
      //       {user.email}
      //     </User>
      //   );
      case "role":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-small capitalize">{cellValue}</p>
            {/* <p className="text-bold text-tiny capitalize text-default-400">{user.team}</p> */}
          </div>
        );
      // case "status":
      //   return (
      //     <Chip className="capitalize" color={statusColorMap[user.status]} size="sm" variant="flat">
      //       {cellValue}
      //     </Chip>
      //   );
      case "actions":
        return (
          <div className="relative flex justify-end items-center gap-2">
            <Dropdown>
              <DropdownTrigger>
                <Button isIconOnly size="sm" variant="light">
                  <VerticalDotsIcon className="text-default-300" />
                </Button>
              </DropdownTrigger>
              <DropdownMenu>
                <DropdownItem onClick={()=>{
                  editModalOnOpen()
                  setUnitData(user)
                }}><MdModeEditOutline className="mr-2 inline-flex"></MdModeEditOutline>Edit</DropdownItem>
                <DropdownItem onClick={()=>{
                  onOpen()
                  getUnitData(user.id,user.unit)
                }}><MdDelete className="mr-2 inline-flex"></MdDelete>Delete</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  const onNextPage = React.useCallback(() => {
    if (page < pages) {
      setPage(page + 1);
    }
  }, [page, pages]);

  const onPreviousPage = React.useCallback(() => {
    if (page > 1) {
      setPage(page - 1);
    }
  }, [page]);

  const onRowsPerPageChange = React.useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    setRowsPerPage(Number(e.target.value));
    setPage(1);
  }, []);

  const onSearchChange = React.useCallback((value?: string) => {
    if (value) {
      setFilterValue(value);
      setPage(1);
    } else {
      setFilterValue("");
    }
  }, []);

  const onClear = React.useCallback(()=>{
    setFilterValue("")
    setPage(1)
  },[])

  const topContent = React.useMemo(() => {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex justify-between gap-3 items-end">
          <Input
            isClearable
            className="w-full sm:max-w-[44%]"
            placeholder="Search by unit..."
            startContent={<SearchIcon />}
            value={filterValue}
            onClear={() => onClear()}
            onValueChange={onSearchChange}
          />
          <div className="flex gap-3">
            {/* <Dropdown>
              <DropdownTrigger className="hidden sm:flex">
                <Button endContent={<ChevronDownIcon className="text-small" />} variant="flat">
                  Status
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Table Columns"
                closeOnSelect={false}
                selectedKeys={statusFilter}
                selectionMode="multiple"
                onSelectionChange={setStatusFilter}
              >
                {statusOptions.map((status) => (
                  <DropdownItem key={status.uid} className="capitalize">
                    {capitalize(status.name)}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown> */}
            <Dropdown>
              <DropdownTrigger className="hidden sm:flex">
                <Button endContent={<ChevronDownIcon className="text-small" />} variant="flat">
                  Columns
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Table Columns"
                closeOnSelect={false}
                selectedKeys={visibleColumns}
                selectionMode="multiple"
                onSelectionChange={setVisibleColumns}
              >
                {columns.map((column) => (
                  <DropdownItem key={column.uid} className="capitalize">
                    {capitalize(column.name)}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
            <Button onClick={openDrawer} className="bg-primarycolor text-white" endContent={<PlusIcon />}>
              Add New Units
            </Button>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-default-400 text-small">Total {users.length} units</span>
          <label className="flex items-center text-default-400 text-small">
            Rows per page:
            <select
              className="bg-transparent outline-none text-default-400 text-small"
              onChange={onRowsPerPageChange}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
            </select>
          </label>
        </div>
      </div>
    );
  }, [
    filterValue,
    statusFilter,
    visibleColumns,
    onSearchChange,
    onRowsPerPageChange,
    users.length,
    hasSearchFilter,
  ]);

  const bottomContent = React.useMemo(() => {
    return (
      <div className="py-2 px-2 flex justify-between items-center">
        <span className="w-[30%] text-small text-default-400">
          {selectedKeys === "all"
            ? "All items selected"
            : `${selectedKeys.size} of ${filteredItems.length} selected`}
        </span>
        <Pagination
          isCompact
          showControls
          showShadow
          color="primary"
          page={page}
          total={pages}
          onChange={setPage}
        />
        <div className="hidden sm:flex w-[30%] justify-end gap-2">
          <Button isDisabled={pages === 1} size="sm" variant="flat" onPress={onPreviousPage}>
            Previous
          </Button>
          <Button isDisabled={pages === 1} size="sm" variant="flat" onPress={onNextPage}>
            Next
          </Button>
        </div>
      </div>
    );
  }, [selectedKeys, items.length, page, pages, hasSearchFilter]);

  return (
    <div className="">
      <Table
      isStriped
      aria-label="Example table with custom cells, pagination and sorting"
      isHeaderSticky
      bottomContent={bottomContent}
      bottomContentPlacement="outside"
      classNames={{
        wrapper: "max-h-[400px] w-full overflow-scroll",
        
      }}
      selectedKeys={selectedKeys}
      selectionMode="multiple"
      sortDescriptor={sortDescriptor}
      topContent={topContent}
      topContentPlacement="outside"
      onSelectionChange={setSelectedKeys}
      onSortChange={setSortDescriptor}
    >
      <TableHeader columns={headerColumns}>
        {(column) => (
          <TableColumn
            key={column.uid}
            align={column.uid === "actions" ? "center" : "start"}
            allowsSorting={column.sortable}
          >
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody emptyContent={"No units found"} items={sortedItems}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>

      <div className="">
        <DeleteRowModal desc="unit" Id={unitId} Name={unitName} isOpen={isOpen} onOpenChange={onOpenChange} graphqlquery={DELETE_UNIT} queryInvalidationName="getUnits"></DeleteRowModal>
        <UnitEditModal userDetails={unitData} isOpen={editModalIsOpen} onOpenChange={editModalOpenChange}></UnitEditModal>
       </div>
    </div>
    
  );
}
