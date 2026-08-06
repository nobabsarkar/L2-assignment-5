/* eslint-disable @typescript-eslint/no-explicit-any */
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { adminGetAllUsers } from "../_action/adminActions";

// const users = [
//   {
//     id: 1,
//     name: "John Doe",
//     email: "john@example.com",
//     role: "ADMIN",
//     status: "ACTIVE",
//   },
//   {
//     id: 2,
//     name: "Sarah Smith",
//     email: "sarah@example.com",
//     role: "LANDLORD",
//     status: "ACTIVE",
//   },
//   {
//     id: 3,
//     name: "Michael Brown",
//     email: "michael@example.com",
//     role: "TENANT",
//     status: "BLOCKED",
//   },
//   {
//     id: 4,
//     name: "Emily Johnson",
//     email: "emily@example.com",
//     role: "TENANT",
//     status: "ACTIVE",
//   },
//   {
//     id: 5,
//     name: "David Wilson",
//     email: "david@example.com",
//     role: "LANDLORD",
//     status: "BLOCKED",
//   },
// ];

const AdminGetAllUser = async () => {
  const users = await adminGetAllUsers();

  return (
    <div className="space-y-5">
      {/* Search */}
      <div className="relative w-full max-w-md">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search by name, email or role..."
          className="pl-9"
        />
      </div>

      {/* ================= Mobile Cards ================= */}
      <div className="grid gap-4 md:hidden">
        {users?.data?.map((user: any) => (
          <div
            key={user.id}
            className="rounded-xl border bg-card p-4 shadow-sm"
          >
            <div className="space-y-3">
              <div>
                <p className="font-semibold">{user.name}</p>
                <p className="text-sm text-muted-foreground">{user.email}</p>
              </div>

              <div className="flex items-center justify-between">
                <Badge variant="outline">{user.role}</Badge>

                <Badge
                  className={
                    user.status === "ACTIVE"
                      ? "bg-green-600 hover:bg-green-600"
                      : "bg-red-600 hover:bg-red-600"
                  }
                >
                  {user.status}
                </Badge>
              </div>

              {user.status === "ACTIVE" ? (
                <Button variant="destructive" className="w-full cursor-pointer">
                  BLOCK
                </Button>
              ) : (
                <Button className="w-full cursor-pointer">ACTIVE</Button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* ================= Desktop Table ================= */}
      <div className="hidden md:block overflow-x-auto rounded-xl border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {users?.data?.map((user: any) => (
              <TableRow key={user.id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  <Badge variant="outline">{user.role}</Badge>
                </TableCell>
                <TableCell>
                  <Badge
                    className={
                      user.status === "ACTIVE"
                        ? "bg-green-600 hover:bg-green-600"
                        : "bg-red-600 hover:bg-red-600"
                    }
                  >
                    {user.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  {user.status === "ACTIVE" ? (
                    <Button
                      className="cursor-pointer"
                      size="sm"
                      variant="destructive"
                    >
                      BLOCK
                    </Button>
                  ) : (
                    <Button className="cursor-pointer" size="sm">
                      ACTIVE
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AdminGetAllUser;
