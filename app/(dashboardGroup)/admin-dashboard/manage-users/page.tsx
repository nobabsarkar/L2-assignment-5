/* eslint-disable @next/next/no-async-client-component */

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
import { adminGetAllUsers } from "../../_action/adminActions";
import AdminGetAllUser from "../../_component/AdminGetAllUser";

const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    role: "ADMIN",
    status: "ACTIVE",
  },
  {
    id: 2,
    name: "Sarah Smith",
    email: "sarah@example.com",
    role: "LANDLORD",
    status: "ACTIVE",
  },
  {
    id: 3,
    name: "Michael Brown",
    email: "michael@example.com",
    role: "TENANT",
    status: "BLOCKED",
  },
  {
    id: 4,
    name: "Emily Johnson",
    email: "emily@example.com",
    role: "TENANT",
    status: "ACTIVE",
  },
  {
    id: 5,
    name: "David Wilson",
    email: "david@example.com",
    role: "LANDLORD",
    status: "BLOCKED",
  },
];

const ManageUsers = () => {
  //   const allUsers = await adminGetAllUsers();

  //   console.log(allUsers);

  return (
    <>
      <AdminGetAllUser />
    </>
  );
};

export default ManageUsers;
