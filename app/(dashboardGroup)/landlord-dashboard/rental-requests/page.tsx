/* eslint-disable @typescript-eslint/no-explicit-any */

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { getRentalRequests } from "../../_action/getRentalRequest";
import UpdateRentalRequestStatus from "../../_component/UpdateRentalRequestStatus";
import UpdateRentalRequestStatusMobileDevice from "../../_component/UpdateRentalRequestStatusMobileDevice";

const RentalRequest = async () => {
  const requests = await getRentalRequests();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Incoming Rental Requests</h1>
        <p className="text-muted-foreground mt-1">
          Review and manage tenant rental requests.
        </p>
      </div>

      {/* Desktop Table */}
      <Card className="hidden lg:block">
        <CardHeader>
          <CardTitle>Rental Requests</CardTitle>
        </CardHeader>

        <CardContent>
          <table className="w-full">
            <thead>
              <tr className="border-b text-left">
                <th className="py-3">Tenant</th>
                <th>Property</th>
                <th>CreatedAt</th>
                <th>UpdatedAt</th>
                <th>Status</th>
                <th className="text-right">Action</th>
              </tr>
            </thead>

            <tbody>
              {requests?.data?.map((item: any) => (
                <tr key={item.id} className="border-b">
                  <td className="py-4 font-medium">{item?.tenant?.name}</td>
                  <td>{item?.property?.title}</td>
                  <td>{item?.property?.createdAt}</td>
                  <td>{item?.property?.updatedAt}</td>

                  <td>
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
                  </td>

                  <td>
                    <UpdateRentalRequestStatus item={item} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>

      {/* Mobile Cards */}
      <div className="grid gap-4 lg:hidden">
        <UpdateRentalRequestStatusMobileDevice requests={requests} />
      </div>
    </div>
  );
};

export default RentalRequest;
