/* eslint-disable @typescript-eslint/no-explicit-any */
import { getAllPaymentHistory } from "../../_action/payment";

const PaymentHistory = async () => {
  const allPaymentHistory = await getAllPaymentHistory();
  console.log(allPaymentHistory);

  const payments = allPaymentHistory?.data || [];

  return (
    <div className="w-full space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Payment History</h1>
        <p className="text-sm text-muted-foreground">
          View all your previous payment transactions.
        </p>
      </div>

      {/* Desktop / Tablet Table */}
      <div className="hidden overflow-x-auto rounded-xl border bg-white shadow-sm md:block">
        <table className="w-full min-w-[800px]">
          <thead className="border-b bg-muted/50">
            <tr className="text-left">
              <th className="px-6 py-4 text-sm font-semibold">#</th>
              <th className="px-6 py-4 text-sm font-semibold">
                Transaction ID
              </th>
              <th className="px-6 py-4 text-sm font-semibold">Amount</th>
              <th className="px-6 py-4 text-sm font-semibold">Status</th>
              <th className="px-6 py-4 text-sm font-semibold">Payment Date</th>
            </tr>
          </thead>

          <tbody className="divide-y">
            {payments.length > 0 ? (
              payments.map((payment: any, index: number) => (
                <tr
                  key={payment.id}
                  className="transition-colors hover:bg-muted/30"
                >
                  <td className="px-6 py-4 text-sm">{index + 1}</td>

                  <td className="px-6 py-4">
                    <p className="max-w-[220px] truncate text-sm font-medium">
                      {payment.transactionId}
                    </p>
                  </td>

                  <td className="px-6 py-4 text-sm font-semibold">
                    ${payment.amount}
                  </td>

                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                        payment.status === "COMPLETED"
                          ? "bg-green-100 text-green-700"
                          : payment.status === "PENDING"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-red-100 text-red-700"
                      }`}
                    >
                      {payment.status}
                    </span>
                  </td>

                  <td className="px-6 py-4 text-sm text-muted-foreground">
                    {new Date(payment.paidAt).toLocaleDateString("en-BD", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={5}
                  className="px-6 py-10 text-center text-sm text-muted-foreground"
                >
                  No payment history found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="grid gap-4 md:hidden">
        {payments.length > 0 ? (
          payments.map((payment: any, index: number) => (
            <div
              key={payment.id}
              className="rounded-xl border bg-white p-5 shadow-sm"
            >
              {/* Card Header */}
              <div className="mb-4 flex items-center justify-between">
                <span className="text-sm font-medium text-muted-foreground">
                  Payment #{index + 1}
                </span>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    payment.status === "COMPLETED"
                      ? "bg-green-100 text-green-700"
                      : payment.status === "PENDING"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                  }`}
                >
                  {payment.status}
                </span>
              </div>

              {/* Transaction ID */}
              <div className="mb-4">
                <p className="mb-1 text-xs text-muted-foreground">
                  Transaction ID
                </p>

                <p className="break-all text-sm font-medium">
                  {payment.transactionId}
                </p>
              </div>

              {/* Amount + Date */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="mb-1 text-xs text-muted-foreground">Amount</p>

                  <p className="text-lg font-bold">${payment.amount}</p>
                </div>

                <div>
                  <p className="mb-1 text-xs text-muted-foreground">Paid At</p>

                  <p className="text-sm font-medium">
                    {new Date(payment.paidAt).toLocaleDateString("en-BD", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </p>
                </div>
              </div>

              {/* Rental Request ID */}
              {/* <div className="mt-4 border-t pt-4">
                <p className="mb-1 text-xs text-muted-foreground">
                  Rental Request ID
                </p>

                <p className="break-all text-xs text-muted-foreground">
                  {payment.rentalRequestId}
                </p>
              </div> */}
            </div>
          ))
        ) : (
          <div className="rounded-xl border bg-white p-10 text-center">
            <p className="text-sm text-muted-foreground">
              No payment history found.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentHistory;
