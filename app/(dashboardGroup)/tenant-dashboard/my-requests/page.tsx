// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { getTenantRentalRequest } from "../../_action/getTenantRentalRequest";

// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";

// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import PaymentButton from "../../_component/PaymentButton";
// import { getAllPaymentHistory } from "../../_action/payment";

// const MyRequest = async () => {
//   const rentalRequests = await getTenantRentalRequest();
//   // console.log(rentalRequests);

//   const paymentHistory = await getAllPaymentHistory();
//   // console.log(paymentHistory);

//   const getStatusBadge = (status: string) => {
//     switch (status) {
//       case "PENDING":
//         return (
//           <Badge className="bg-yellow-500 hover:bg-yellow-500 text-white">
//             Pending
//           </Badge>
//         );

//       case "APPROVED":
//         return (
//           <Badge className="bg-blue-500 hover:bg-blue-500 text-white">
//             Approved
//           </Badge>
//         );

//       case "REJECTED":
//         return (
//           <Badge className="bg-red-500 hover:bg-red-500 text-white">
//             Rejected
//           </Badge>
//         );

//       case "ACTIVE":
//         return (
//           <Badge className="bg-green-500 hover:bg-green-500 text-white">
//             Active
//           </Badge>
//         );

//       case "COMPLETED":
//         return (
//           <Badge className="bg-gray-500 hover:bg-gray-500 text-white">
//             Completed
//           </Badge>
//         );

//       default:
//         return <Badge>Unknown</Badge>;
//     }
//   };

//   const getPaymentBadge = (status: string) => {
//     switch (status) {
//       case "PENDING":
//         return <Badge variant="outline">Not Available</Badge>;

//       case "APPROVED":
//         return (
//           <Badge className="bg-blue-500 hover:bg-blue-500 text-white">
//             Ready to Pay
//           </Badge>
//         );

//       case "REJECTED":
//         return (
//           <Badge className="bg-red-500 hover:bg-red-500 text-white">
//             Unavailable
//           </Badge>
//         );

//       case "ACTIVE":
//         return (
//           <Badge className="bg-green-500 hover:bg-green-500 text-white">
//             Paid
//           </Badge>
//         );

//       case "COMPLETED":
//         return (
//           <Badge className="bg-green-500 hover:bg-green-500 text-white">
//             Paid
//           </Badge>
//         );

//       default:
//         return <Badge>Unknown</Badge>;
//     }
//   };

//   const renderActionButton = (status: string, rentalRequestId: string) => {
//     switch (status) {
//       case "PENDING":
//         return (
//           <Button className="w-full" size="sm" disabled>
//             Waiting
//           </Button>
//         );

//       case "APPROVED":
//         return (
//           <PaymentButton rentalRequestId={rentalRequestId} />
//           // <Button className="cursor-pointer w-full" size="sm">
//           //   Pay Nowsss
//           // </Button>
//         );

//       case "REJECTED":
//         return (
//           <Button className="w-full" size="sm" variant="destructive" disabled>
//             Rejected
//           </Button>
//         );

//       case "ACTIVE":
//         return (
//           <Button className="cursor-pointer w-full" size="sm">
//             Leave Review
//           </Button>
//         );

//       case "COMPLETED":
//         return (
//           <Button className="cursor-pointer w-full" size="sm" variant="outline">
//             View Details
//           </Button>
//         );

//       default:
//         return null;
//     }
//   };

//   const getPaymentForRequest = (rentalRequestId: string) => {
//     return paymentHistory?.data?.find(
//       (payment: any) => payment.rentalRequestId === rentalRequestId,
//     );
//   };

//   return (
//     <>
//       <div className="hidden md:block rounded-xl border overflow-x-auto">
//         <Table className="space-y-5">
//           <TableHeader>
//             <TableRow>
//               <TableHead>Property</TableHead>
//               <TableHead>Landlord</TableHead>
//               <TableHead>Price</TableHead>
//               <TableHead>Status</TableHead>
//               <TableHead>Payment</TableHead>
//               <TableHead className="text-right">Action</TableHead>
//             </TableRow>
//           </TableHeader>

//           {rentalRequests?.data?.map((item: any) => {
//             return (
//               <TableBody key={item.id}>
//                 <TableRow>
//                   <TableCell>
//                     <div>
//                       <p className="font-semibold">{item?.property?.title}</p>
//                       {/* <p className="text-sm text-muted-foreground">
//                         {item?.location}
//                       </p> */}
//                     </div>
//                   </TableCell>
//                   <TableCell>{item?.property?.landlord?.name}</TableCell>
//                   <TableCell>${item?.property?.price}</TableCell>
//                   <TableCell>{getStatusBadge(item?.status)}</TableCell>
//                   <TableCell>{getPaymentBadge(item.status)}</TableCell>
//                   <TableCell className="text-right">
//                     {renderActionButton(item.status, item?.id)}
//                   </TableCell>
//                 </TableRow>
//               </TableBody>
//             );
//           })}
//         </Table>
//       </div>

//       {rentalRequests?.data?.map((item: any) => (
//         <div key={item.id} className="space-y-4 md:hidden ">
//           <div className="rounded-xl border p-4 shadow-sm mb-5">
//             <div className="flex items-start justify-between">
//               <div>
//                 <h3 className="font-semibold text-base">
//                   {item?.property?.title}
//                 </h3>
//               </div>

//               {getStatusBadge(item.status)}
//             </div>

//             <div className="mt-4 space-y-2 text-sm">
//               <div className="flex justify-between">
//                 <span className="text-muted-foreground">Landlord</span>
//                 <span>{item?.property?.landlord?.name}</span>
//               </div>

//               <div className="flex justify-between">
//                 <span className="text-muted-foreground">Price</span>
//                 <span>${item?.property?.price}</span>
//               </div>

//               <div className="flex justify-between">
//                 <span className="text-muted-foreground">Payment</span>

//                 {getPaymentBadge(getPaymentForRequest(item.id)?.status)}

//                 {/* {getPaymentBadge(item.status)} */}
//               </div>
//             </div>

//             <div className="mt-5">
//               {getPaymentBadge(getPaymentForRequest(item.id)?.status)}
//               {/* {renderActionButton(item.status, item?.id)} */}
//             </div>
//           </div>
//         </div>
//       ))}
//     </>
//   );
// };

// export default MyRequest;

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
import { getAllPaymentHistory } from "../../_action/payment";

const MyRequest = async () => {
  // Get rental requests
  const rentalRequests = await getTenantRentalRequest();

  // Get payment history
  const paymentHistory = await getAllPaymentHistory();

  // -----------------------------------------
  // Rental Request Status Badge
  // -----------------------------------------
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

  // -----------------------------------------
  // Get Payment For Specific Rental Request
  // -----------------------------------------
  const getPaymentForRequest = (rentalRequestId: string) => {
    return paymentHistory?.data?.find(
      (payment: any) => payment.rentalRequestId === rentalRequestId,
    );
  };

  // -----------------------------------------
  // Payment Status Badge
  // -----------------------------------------
  const getPaymentBadge = (status?: string) => {
    switch (status) {
      case "PENDING":
        return (
          <Badge className="bg-yellow-500 hover:bg-yellow-500 text-white">
            Pending
          </Badge>
        );

      case "COMPLETED":
        return (
          <Badge className="bg-green-500 hover:bg-green-500 text-white">
            Paid
          </Badge>
        );

      case "FAILED":
        return (
          <Badge className="bg-red-500 hover:bg-red-500 text-white">
            Payment Failed
          </Badge>
        );

      case "CANCELLED":
        return (
          <Badge className="bg-red-500 hover:bg-red-500 text-white">
            Cancelled
          </Badge>
        );

      default:
        return <Badge variant="outline">Not Paid</Badge>;
    }
  };

  // -----------------------------------------
  // Action Button
  // -----------------------------------------
  const renderActionButton = (
    rentalStatus: string,
    rentalRequestId: string,
    paymentStatus?: string,
  ) => {
    // Request is waiting for landlord approval
    if (rentalStatus === "PENDING") {
      return (
        <Button className="w-full" size="sm" disabled>
          Waiting
        </Button>
      );
    }

    // Request rejected
    if (rentalStatus === "REJECTED") {
      return (
        <Button className="w-full" size="sm" variant="destructive" disabled>
          Rejected
        </Button>
      );
    }

    // Request approved but payment is not completed
    if (rentalStatus === "APPROVED" && paymentStatus !== "COMPLETED") {
      return <PaymentButton rentalRequestId={rentalRequestId} />;
    }

    // Payment completed / request active
    if (rentalStatus === "ACTIVE") {
      return (
        <Button className="cursor-pointer w-full" size="sm">
          Leave Review
        </Button>
      );
    }

    // Request completed
    if (rentalStatus === "COMPLETED") {
      return (
        <Button className="cursor-pointer w-full" size="sm" variant="outline">
          View Details
        </Button>
      );
    }

    // Payment completed but rental status is still APPROVED
    if (rentalStatus === "APPROVED" && paymentStatus === "COMPLETED") {
      return (
        <Button className="w-full" size="sm" variant="outline" disabled>
          Paid
        </Button>
      );
    }

    return null;
  };

  return (
    <>
      {/* =====================================================
          DESKTOP TABLE
      ====================================================== */}
      <div className="hidden md:block rounded-xl border overflow-x-auto">
        <Table>
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

          <TableBody>
            {rentalRequests?.data?.map((item: any) => {
              // Find payment related to this rental request
              const payment = getPaymentForRequest(item.id);

              return (
                <TableRow key={item.id}>
                  {/* Property */}
                  <TableCell>
                    <div>
                      <p className="font-semibold">{item?.property?.title}</p>
                    </div>
                  </TableCell>

                  {/* Landlord */}
                  <TableCell>{item?.property?.landlord?.name}</TableCell>

                  {/* Price */}
                  <TableCell>${item?.property?.price}</TableCell>

                  {/* Rental Request Status */}
                  {/* <TableCell>{getStatusBadge(item?.status)}</TableCell> */}
                  <TableCell>
                    {getStatusBadge(
                      payment?.status === "COMPLETED"
                        ? "COMPLETED"
                        : item?.status,
                    )}
                  </TableCell>

                  {/* Payment Status */}
                  <TableCell>{getPaymentBadge(payment?.status)}</TableCell>

                  {/* Action */}
                  <TableCell className="text-right">
                    {renderActionButton(item.status, item.id, payment?.status)}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>

      {/* =====================================================
          MOBILE CARDS
      ====================================================== */}
      <div className="md:hidden space-y-4">
        {rentalRequests?.data?.map((item: any) => {
          // Find payment related to this rental request
          const payment = getPaymentForRequest(item.id);

          return (
            <div key={item.id} className="rounded-xl border p-4 shadow-sm">
              {/* Property + Status */}
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-semibold text-base">
                    {item?.property?.title}
                  </h3>
                </div>

                {getStatusBadge(item.status)}
              </div>

              {/* Information */}
              <div className="mt-4 space-y-3 text-sm">
                {/* Landlord */}
                <div className="flex justify-between gap-4">
                  <span className="text-muted-foreground">Landlord</span>

                  <span>{item?.property?.landlord?.name}</span>
                </div>

                {/* Price */}
                <div className="flex justify-between gap-4">
                  <span className="text-muted-foreground">Price</span>

                  <span>${item?.property?.price}</span>
                </div>

                {/* Payment */}
                <div className="flex justify-between items-center gap-4">
                  <span className="text-muted-foreground">Payment</span>

                  {getPaymentBadge(payment?.status)}
                </div>
              </div>

              {/* Action */}
              <div className="mt-5">
                {renderActionButton(item.status, item.id, payment?.status)}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MyRequest;
