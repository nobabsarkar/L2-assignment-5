/* eslint-disable @typescript-eslint/no-explicit-any */

// import { useState } from "react";
import { Check, X } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getRentalRequests } from "../../_action/getRentalRequest";
import UpdateRentalRequestStatus from "../../_component/UpdateRentalRequestStatus";
import UpdateRentalRequestStatusMobileDevice from "../../_component/UpdateRentalRequestStatusMobileDevice";

// const initialRequests = [
//   {
//     id: 1,
//     tenant: "Nobab Sarkar",
//     property: "Green Residency",
//     moveIn: "01 Sep 2026",
//     status: "PENDING",
//   },
//   {
//     id: 2,
//     tenant: "Rakib Hossain",
//     property: "City Heights",
//     moveIn: "15 Sep 2026",
//     status: "APPROVED",
//   },
// ];

const RentalRequest = async () => {
  const requests = await getRentalRequests();

  // const changeRentalRequestStatus = async (id: string) => {
  //   const updateRentalReques = await updateRentalRequestStatus(id);
  //   console.log(updateRentalReques);
  // };

  // const [requests, setRequests] = useState(initialRequests);

  // const updateStatus = (id: number, status: "APPROVED" | "REJECTED") => {
  //   setRequests((prev) =>
  //     prev.map((request) =>
  //       request.id === id ? { ...request, status } : request,
  //     ),
  //   );
  // };

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
                    {/* {item.status === "PENDING" ? (
                      <div className="flex justify-end gap-2">
                        <Button
                          size="sm"
                          // onClick={() => changeRentalRequestStatus(item?.id)}
                          onClick={() => updateRentalRequestStatus(item?.id)}
                        >
                          <Check className="mr-1 h-4 w-4" />
                          Approve
                        </Button>

                        <Button
                          size="sm"
                          variant="destructive"
                          // onClick={() => updateStatus(item.id, "REJECTED")}
                        >
                          <X className="mr-1 h-4 w-4" />
                          Reject
                        </Button>
                      </div>
                    ) : (
                      <p className="text-right text-sm text-muted-foreground">
                        Completed
                      </p>
                    )} */}
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
        {/* {requests?.data?.map((item: any) => (
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

                <span className="font-medium">{item?.property?.createdAt}</span>
                <span className="font-medium">{item?.property?.updatedAt}</span>
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
                    onClick={() => updateStatus(item.id, "APPROVED")}
                  >
                    Approve
                  </Button>

                  <Button
                    className="flex-1 cursor-pointer"
                    variant="destructive"
                    onClick={() => updateStatus(item.id, "REJECTED")}
                  >
                    Reject
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        ))} */}
      </div>
    </div>
  );
};

export default RentalRequest;
