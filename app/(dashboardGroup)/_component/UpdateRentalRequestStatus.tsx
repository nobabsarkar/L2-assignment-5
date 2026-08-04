/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";
import { landlordUpdateRentalRequestStatus } from "../_action/getRentalRequest";
import { toast } from "sonner";

const UpdateRentalRequestStatus = ({ item }: any) => {
  //

  const updateRentalRequest = async (
    id: string,
    status: "APPROVED" | "REJECTED",
  ) => {
    const result = await landlordUpdateRentalRequestStatus(id, status);
    console.log(result);

    if (result?.success && result?.data?.status === "APPROVED") {
      toast.success("Request Approved Tenant can now pay");
    } else if (result?.success && result?.data?.status === "REJECTED") {
      toast.error("Tenant Request is Rejected");
    }
  };

  return (
    <div>
      {item.status === "PENDING" ? (
        <div className="flex justify-end gap-2">
          <Button
            className="cursor-pointer"
            size="sm"
            onClick={() => updateRentalRequest(item?.id, "APPROVED")}
          >
            <Check className="mr-1 h-4 w-4" />
            Approve
          </Button>

          <Button
            className="cursor-pointer"
            variant="destructive"
            onClick={() => updateRentalRequest(item?.id, "REJECTED")}
          >
            <X className="mr-1 h-4 w-4" />
            Reject
          </Button>
        </div>
      ) : (
        <p className="text-right text-sm text-muted-foreground">Completed</p>
      )}
    </div>
  );
};

export default UpdateRentalRequestStatus;
