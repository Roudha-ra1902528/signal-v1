import { MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// {
//   "uuid": "a1b2c3d4-5678-1234-5678-90abcdef1234",
//   "username": "user1",
//   "displayname": "User One",
//   "email": "user1@example.com",
//   "status": "active",
//   "QID": "123456789012",
//   "mobile": "+97412345678",
//   "dept_code": "D001",
//   "headwind_username": "huser1"
// },

export const columns = [
    {
      accessorKey: "username",
      header: "Username",
    },
    {
      accessorKey: "displayname",
      header: "Display Name",
    },
    {
      accessorKey: "email",
      header: "Email",
    },
    {
      accessorKey: "status",
      header: "Status",
    },
    {
      accessorKey: "QID",
      header: "QID",
    },
    {
      accessorKey: "dept_code",
      header: "Department Code",
    },
    {
      accessorKey: "headwind_username",
      header: "Headwind Username",
    },
    {
        id: "actions",
        cell: ({ row }) => {
          const user = row.original
          return (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <span className="sr-only">Open menu</span>
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuItem
                  onClick={() => navigator.clipboard.writeText(user.uuid)}
                >
                  Copy payment ID
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>{user.username}</DropdownMenuItem>
                <DropdownMenuItem>View customer</DropdownMenuItem>
                <DropdownMenuItem>View payment details</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )
        },
      },
  ]

