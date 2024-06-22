import {
  flexRender,
  getCoreRowModel,
  getExpandedRowModel,
  useReactTable,
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import React from "react"

const getCommonPinningStyles = (column, header = '') => {
  const isPinned = column.getIsPinned()
  const isFirstRightPinnedColumn = isPinned === 'right' && column.getIsFirstColumn('right')

  return {
    backgroundColor: isPinned === "right" && 'white',
    // borderRadius: header === "header" && '10px',
    boxShadow: isFirstRightPinnedColumn &&  '4px 0 4px -4px gray inset' ,
    right: isPinned === 'right' ? `${column.getAfter('right')}px` : undefined,
    position: isPinned ? 'sticky' : 'relative',
    zIndex: isPinned ? 1 : 0,
  }
}


export function DataTable({ columns, data }) {

  const table = useReactTable({
    data,
    columns,
    initialState: {
      columnPinning: {
        right : ['actions']
      }
    },
    getCoreRowModel: getCoreRowModel(),
    //  getRowId: originalRow => originalRow.uuid,
    getExpandedRowModel: getExpandedRowModel(),
  })

  return (
    <div className="">

      <Table className="rounded-3xl border-2">

        <TableHeader >
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                const { column } = header
                
                return (
                  <TableHead key={header.id}
                    style={{ ...getCommonPinningStyles(column, 'header') }}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                  </TableHead>
                )
              }
              )}
            </TableRow>
          ))}
        </TableHeader>


        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
                className="odd:bg-white even:bg-slate-100"
              >
                {row.getVisibleCells().map((cell) => {
                  const { column } = cell

                  return (
                    <TableCell key={cell.id} style={{ ...getCommonPinningStyles(column) }}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  )
                })}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                {/* {JSON.stringify(table.data)} */}
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
}
