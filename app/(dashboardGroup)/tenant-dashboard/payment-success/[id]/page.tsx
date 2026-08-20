import { getSinglePayment } from "@/app/(dashboardGroup)/_action/payment";
import { CheckCircle2 } from "lucide-react";

const PaymentSuccess = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  const paymentData = await getSinglePayment(id);
  console.log(paymentData?.data);

  return (
    <div className="min-h-screen bg-muted/30 px-4 py-10">
      <div className="mx-auto max-w-2xl">
        {/* Success Message */}
        <div className="mb-6 text-center">
          <CheckCircle2 className="mx-auto mb-3 h-16 w-16 text-green-500" />

          <h1 className="text-3xl font-bold text-green-500">
            Payment Successful!
          </h1>

          <p className="mt-2 text-muted-foreground">
            Your payment has been completed successfully.
          </p>
        </div>

        {/* Payment Card */}
        <div className="rounded-xl border bg-background p-6 shadow-sm">
          <h2 className="mb-6 text-xl font-semibold">Payment Details</h2>

          <div className="space-y-4">
            <div className="flex flex-col gap-1 border-b pb-3 sm:flex-row sm:items-center sm:justify-between">
              <span className="text-muted-foreground">Transaction ID</span>

              <span className="font-medium break-all sm:text-right">
                {paymentData?.data?.transactionId}
              </span>
            </div>

            <div className="flex flex-col gap-1 border-b pb-3 sm:flex-row sm:items-center sm:justify-between">
              <span className="text-muted-foreground">Amount</span>

              <span className="font-semibold">
                ${paymentData?.data?.amount}
              </span>
            </div>

            <div className="flex flex-col gap-1 border-b pb-3 sm:flex-row sm:items-center sm:justify-between">
              <span className="text-muted-foreground">Status</span>

              <span className="w-fit rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
                {paymentData?.data?.status}
              </span>
            </div>

            <div className="flex flex-col gap-1 border-b pb-3 sm:flex-row sm:items-center sm:justify-between">
              <span className="text-muted-foreground">Payment Date</span>

              {/* <span className="font-medium">{paymentData?.data?.paidAt}</span> */}
              <span className="font-medium">
                {paymentData?.data?.paidAt
                  ? new Date(paymentData.data.paidAt).toLocaleString("en-BD", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: true,
                    })
                  : "N/A"}
              </span>
            </div>

            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
              <span className="text-muted-foreground">Rental Request ID</span>

              <span className="font-medium break-all sm:text-right">
                {paymentData?.data?.rentalRequestId}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
