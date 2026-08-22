/* eslint-disable @typescript-eslint/no-explicit-any */
import { getAllPaymentHistory } from "../../_action/payment";
import { CheckCircle2, Clock3, CreditCard, XCircle } from "lucide-react";

const PaymentHistory = async () => {
  const allPaymentHistory = await getAllPaymentHistory();

  const payments = allPaymentHistory?.data || [];

  const getStatusConfig = (status: string) => {
    switch (status) {
      case "COMPLETED":
        return {
          label: "Completed",
          className:
            "border-green-200 bg-green-50 text-green-700 dark:border-green-900/50 dark:bg-green-950/40 dark:text-green-400",
          icon: <CheckCircle2 className="h-3.5 w-3.5" />,
        };

      case "PENDING":
        return {
          label: "Pending",
          className:
            "border-yellow-200 bg-yellow-50 text-yellow-700 dark:border-yellow-900/50 dark:bg-yellow-950/40 dark:text-yellow-400",
          icon: <Clock3 className="h-3.5 w-3.5" />,
        };

      default:
        return {
          label: "Failed",
          className:
            "border-red-200 bg-red-50 text-red-700 dark:border-red-900/50 dark:bg-red-950/40 dark:text-red-400",
          icon: <XCircle className="h-3.5 w-3.5" />,
        };
    }
  };

  const formatDate = (date: string | null) => {
    if (!date) return "—";

    return new Date(date).toLocaleDateString("en-BD", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const formatAmount = (amount: number) => {
    return new Intl.NumberFormat("en-BD", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount);
  };

  return (
    <div className="w-full space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">
            Payment History
          </h1>

          <p className="text-sm text-muted-foreground">
            View and track all your previous payment transactions.
          </p>
        </div>

        <div className="flex w-fit items-center gap-2 rounded-lg border border-border bg-muted/40 px-3 py-2">
          <CreditCard className="h-4 w-4 text-primary" />

          <span className="text-sm font-medium text-foreground">
            {payments.length}{" "}
            {payments.length === 1 ? "Transaction" : "Transactions"}
          </span>
        </div>
      </div>

      {/* Desktop / Tablet Table */}
      <div className="hidden overflow-hidden rounded-2xl border border-border bg-card shadow-sm md:block">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px] space-y-3">
            <thead className="border-b border-border bg-muted/40">
              <tr className="text-left">
                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  #
                </th>

                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Transaction
                </th>

                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Amount
                </th>

                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Status
                </th>

                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Payment Date
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-border">
              {payments.length > 0 ? (
                payments.map((payment: any, index: number) => {
                  const status = getStatusConfig(payment.status);

                  return (
                    <tr
                      key={payment.id}
                      className="group transition-colors hover:bg-muted/30"
                    >
                      {/* Number */}
                      <td className="px-6 py-5">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-muted text-sm font-semibold text-muted-foreground">
                          {index + 1}
                        </div>
                      </td>

                      {/* Transaction ID */}
                      <td className="px-6 py-5">
                        <div className="max-w-[280px]">
                          <p className="mb-1 text-xs text-muted-foreground">
                            Transaction ID
                          </p>

                          <p
                            className="truncate text-sm font-semibold text-foreground"
                            title={payment.transactionId}
                          >
                            {payment.transactionId}
                          </p>
                        </div>
                      </td>

                      {/* Amount */}
                      <td className="px-6 py-5">
                        <p className="text-base font-bold text-foreground">
                          ${formatAmount(payment.amount)}
                        </p>
                      </td>

                      {/* Status */}
                      <td className="px-6 py-5">
                        <span
                          className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold ${status.className}`}
                        >
                          {status.icon}
                          {status.label}
                        </span>
                      </td>

                      {/* Date */}
                      <td className="px-6 py-5">
                        <p className="text-sm font-medium text-foreground">
                          {formatDate(payment.paidAt)}
                        </p>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan={5} className="px-6 py-16 text-center">
                    <div className="flex flex-col items-center justify-center">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-muted">
                        <CreditCard className="h-6 w-6 text-muted-foreground" />
                      </div>

                      <h3 className="text-sm font-semibold text-foreground">
                        No payment history
                      </h3>

                      <p className="mt-1 text-sm text-muted-foreground">
                        Your payment transactions will appear here.
                      </p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile Cards */}
      <div className="grid gap-4 md:hidden">
        {payments.length > 0 ? (
          payments.map((payment: any, index: number) => {
            const status = getStatusConfig(payment.status);

            return (
              <div
                key={payment.id}
                className="rounded-2xl border border-border bg-card p-5 shadow-sm transition-all duration-200 hover:shadow-md"
              >
                {/* Card Header */}
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                      <CreditCard className="h-4 w-4 text-primary" />
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        Payment #{index + 1}
                      </p>

                      <p className="text-xs text-muted-foreground">
                        Transaction
                      </p>
                    </div>
                  </div>

                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-semibold ${status.className}`}
                  >
                    {status.icon}
                    {status.label}
                  </span>
                </div>

                {/* Transaction ID */}
                <div className="mb-5 rounded-xl border border-border bg-muted/30 p-4">
                  <p className="mb-1 text-xs font-medium text-muted-foreground">
                    Transaction ID
                  </p>

                  <p className="break-all text-sm font-semibold text-foreground">
                    {payment.transactionId}
                  </p>
                </div>

                {/* Amount + Date */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-border bg-muted/20 p-4">
                    <p className="mb-1 text-xs font-medium text-muted-foreground">
                      Amount
                    </p>

                    <p className="text-lg font-bold text-foreground">
                      ${formatAmount(payment.amount)}
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-muted/20 p-4">
                    <p className="mb-1 text-xs font-medium text-muted-foreground">
                      Paid At
                    </p>

                    <p className="text-sm font-semibold text-foreground">
                      {formatDate(payment.paidAt)}
                    </p>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="rounded-2xl border border-border bg-card p-10 text-center shadow-sm">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-muted">
              <CreditCard className="h-6 w-6 text-muted-foreground" />
            </div>

            <h3 className="text-sm font-semibold text-foreground">
              No payment history
            </h3>

            <p className="mt-1 text-sm text-muted-foreground">
              Your payment transactions will appear here.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentHistory;
