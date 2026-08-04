/* eslint-disable @typescript-eslint/no-explicit-any */
import { getTenantRentalRequest } from "../../_action/getTenantRentalRequest";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const MyRequest = async () => {
  const rentalRequests = await getTenantRentalRequest();

  // console.log(rentalRequests);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "PENDING":
        return (
          <Badge className="bg-yellow-500 hover:bg-yellow-500 text-white">
            Pending
          </Badge>
        );

      case "APPROVED":
        return (
          <Badge className="bg-blue-500 hover:bg-blue-500 text-white">
            Approved
          </Badge>
        );

      case "REJECTED":
        return (
          <Badge className="bg-red-500 hover:bg-red-500 text-white">
            Rejected
          </Badge>
        );

      case "ACTIVE":
        return (
          <Badge className="bg-green-500 hover:bg-green-500 text-white">
            Active
          </Badge>
        );

      case "COMPLETED":
        return (
          <Badge className="bg-gray-500 hover:bg-gray-500 text-white">
            Completed
          </Badge>
        );

      default:
        return <Badge>Unknown</Badge>;
    }
  };

  const getPaymentBadge = (status: string) => {
    switch (status) {
      case "PENDING":
        return <Badge variant="outline">Not Available</Badge>;

      case "APPROVED":
        return (
          <Badge className="bg-blue-500 hover:bg-blue-500 text-white">
            Ready to Pay
          </Badge>
        );

      case "REJECTED":
        return (
          <Badge className="bg-red-500 hover:bg-red-500 text-white">
            Unavailable
          </Badge>
        );

      case "ACTIVE":
        return (
          <Badge className="bg-green-500 hover:bg-green-500 text-white">
            Paid
          </Badge>
        );

      case "COMPLETED":
        return (
          <Badge className="bg-green-500 hover:bg-green-500 text-white">
            Paid
          </Badge>
        );

      default:
        return <Badge>Unknown</Badge>;
    }
  };

  const renderActionButton = (status: string) => {
    switch (status) {
      case "PENDING":
        return (
          <Button size="sm" disabled>
            Waiting
          </Button>
        );

      case "APPROVED":
        return (
          <Button className="cursor-pointer" size="sm">
            Pay Now
          </Button>
        );

      case "REJECTED":
        return (
          <Button size="sm" variant="destructive" disabled>
            Rejected
          </Button>
        );

      case "ACTIVE":
        return (
          <Button className="cursor-pointer" size="sm">
            Leave Review
          </Button>
        );

      case "COMPLETED":
        return (
          <Button className="cursor-pointer" size="sm" variant="outline">
            View Details
          </Button>
        );

      default:
        return null;
    }
  };

  return (
    <>
      <div className="hidden md:block rounded-xl border overflow-x-auto">
        <Table className="space-y-5">
          <TableHeader>
            <TableRow>
              <TableHead>Property</TableHead>
              <TableHead>Landlord</TableHead>
              <TableHead>Monthly Rent</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Payment</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>

          {rentalRequests?.data?.map((item: any) => (
            <TableBody key={item.id}>
              <TableRow>
                <TableCell>
                  <div>
                    <p className="font-semibold">{item?.property?.title}</p>
                    <p className="text-sm text-muted-foreground">
                      {item?.property?.location}
                    </p>
                  </div>
                </TableCell>
                <TableCell>{item?.property?.landlord?.name}</TableCell>
                <TableCell>${item?.property?.price}</TableCell>
                <TableCell>{getStatusBadge(item?.status)}</TableCell>
                <TableCell>{getPaymentBadge(item.status)}</TableCell>
                <TableCell className="text-right">
                  {renderActionButton(item.status)}
                </TableCell>
              </TableRow>
            </TableBody>
          ))}
        </Table>
      </div>

      {/* ================= Mobile ================= */}
      {rentalRequests?.data?.map((item: any) => (
        <div key={item.id} className="space-y-4 md:hidden ">
          <div className="rounded-xl border p-4 shadow-sm mb-5">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold text-base">
                  {item?.property?.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item?.property?.location}
                </p>
              </div>

              {getStatusBadge(item.status)}
            </div>

            <div className="mt-4 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Landlord</span>
                <span>{item?.property?.landlord?.name}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-muted-foreground">Price</span>
                <span>${item?.property?.price}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-muted-foreground">Payment</span>
                {getPaymentBadge(item.status)}
              </div>
            </div>

            <Button className="mt-5 w-full">
              {renderActionButton(item.status)}
            </Button>
          </div>
        </div>
      ))}
    </>
  );
};

export default MyRequest;
