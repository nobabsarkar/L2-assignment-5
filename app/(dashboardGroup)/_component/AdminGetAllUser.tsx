/* eslint-disable @next/next/no-async-client-component */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Button } from "@/components/ui/button";
import { changeUserStatus } from "../_action/adminActions";
import { toast } from "sonner";

const AdminGetAllUser = ({ user }: any) => {
  //

  const handleUserStatus = async () => {
    const userStatus = user?.status === "ACTIVE" ? "BLOCKED" : "ACTIVE";

    const result = await changeUserStatus(user?.id, userStatus);

    if (result?.success) {
      toast.success("Chagne User Status!");
    }
  };

  return (
    <>
      {user.status === "ACTIVE" ? (
        <Button
          onClick={handleUserStatus}
          variant="destructive"
          className="w-full cursor-pointer"
        >
          BLOCK
        </Button>
      ) : (
        <Button onClick={handleUserStatus} className="w-full cursor-pointer">
          ACTIVE
        </Button>
      )}
    </>
  );
};

export default AdminGetAllUser;
