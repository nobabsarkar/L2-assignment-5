/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { landlordUpdateRentalRequestStatus } from "../_action/getRentalRequest";
import { toast } from "sonner";

const UpdateRentalRequestStatusMobileDevice = ({ requests }: any) => {
  //

  const updateRentalRequest = async (
    id: string,
    status: "APPROVED" | "REJECTED",
  ) => {
    const result = await landlordUpdateRentalRequestStatus(id, status);

    if (result?.success && result?.data?.status === "APPROVED") {
      toast.success("Request Approved Tenant can now pay");
    } else if (result?.success && result?.data?.status === "REJECTED") {
      toast.error("Tenant Request is Rejected");
    }
  };

  return (
    <>
      {requests?.data?.map((item: any) => (
        <Card key={item.id}>
          <CardContent className="space-y-4 pt-6">
            <div>
              <h3 className="text-lg font-semibold">{item?.tenant?.name}</h3>
              <p className="text-muted-foreground">{item?.property?.title}</p>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">
                CreatedAt: {item?.property?.createdAt}
              </span>
              <span className="text-sm text-muted-foreground">
                UpdatedAt:{item?.property?.updatedAt}
              </span>
            </div>

            <Badge
              variant={
                item.status === "APPROVED"
                  ? "default"
                  : item.status === "REJECTED"
                    ? "destructive"
                    : "secondary"
              }
            >
              {item.status}
            </Badge>

            {item.status === "PENDING" && (
              <div className="flex gap-2">
                <Button
                  className="flex-1 cursor-pointer"
                  onClick={() => updateRentalRequest(item.id, "APPROVED")}
                >
                  Approve
                </Button>

                <Button
                  className="flex-1 cursor-pointer"
                  variant="destructive"
                  onClick={() => updateRentalRequest(item.id, "REJECTED")}
                >
                  Reject
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </>
  );
};

export default UpdateRentalRequestStatusMobileDevice;
