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
import PaymentButton from "../../_component/PaymentButton";
import { getAllPaymentHistory, getSinglePayment } from "../../_action/payment";

const MyRequest = async () => {
  // const rentalRequests = await getTenantRentalRequest();

  const paymentHistory = await getAllPaymentHistory();
  console.log(paymentHistory);

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

  const renderActionButton = (status: string, rentalRequestId: string) => {
    switch (status) {
      case "PENDING":
        return (
          <Button className="w-full" size="sm" disabled>
            Waiting
          </Button>
        );

      case "APPROVED":
        return (
          <PaymentButton rentalRequestId={rentalRequestId} />
          // <Button className="cursor-pointer w-full" size="sm">
          //   Pay Nowsss
          // </Button>
        );

      case "REJECTED":
        return (
          <Button className="w-full" size="sm" variant="destructive" disabled>
            Rejected
          </Button>
        );

      case "ACTIVE":
        return (
          <Button className="cursor-pointer w-full" size="sm">
            Leave Review
          </Button>
        );

      case "COMPLETED":
        return (
          <Button className="cursor-pointer w-full" size="sm" variant="outline">
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
              <TableHead>Price</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Payment</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>

          {paymentHistory?.data?.map((item: any) => {
            console.log(item);
            return (
              <TableBody key={item.id}>
                <TableRow>
                  <TableCell>
                    <div>
                      <p className="font-semibold">
                        {item?.rentalRequest?.property?.title}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {item?.rentalRequest?.property?.locatiion}
                      </p>
                    </div>
                  </TableCell>
                  <TableCell>{item?.property?.landlord?.name}</TableCell>
                  <TableCell>${item?.amount}</TableCell>
                  <TableCell>{getStatusBadge(item?.status)}</TableCell>
                  <TableCell>{getPaymentBadge(item.status)}</TableCell>
                  <TableCell className="text-right">
                    {renderActionButton(item.status, item?.id)}
                  </TableCell>
                </TableRow>
              </TableBody>
            );
          })}
        </Table>
      </div>

      {paymentHistory?.data?.map((item: any) => (
        <div key={item.id} className="space-y-4 md:hidden ">
          <div className="rounded-xl border p-4 shadow-sm mb-5">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold text-base">
                  {item?.rentalRequest?.property?.title}
                </h3>
                {/* <p className="text-sm text-muted-foreground">
                  {item?.rentalRequest?.property?.locatiion}
                </p> */}
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

            <div className="mt-5">
              {renderActionButton(item.status, item?.id)}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default MyRequest;
