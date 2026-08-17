/* eslint-disable @typescript-eslint/no-explicit-any */
import { Building2, ClipboardList, Wallet } from "lucide-react";
import { getRentalRequests } from "../_action/getRentalRequest";
import { Card, CardContent } from "@/components/ui/card";
import { getAllProperties } from "../_action/adminActions";
import { LandlordTotalEarning } from "../_action/payment";

const LandlordDashboard = async () => {
  const requests = await getRentalRequests();
  const totalEarning = await LandlordTotalEarning();

  const pendingCound = requests?.data?.filter(
    (request: any) => request?.status === "PENDING",
  ).length;

  // const properties = await getAllProperties();

  return (
    <>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <div className="group relative overflow-hidden rounded-2xl border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
          <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-primary/5 transition-transform duration-500 group-hover:scale-150" />

          <div className="relative flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Total Properties
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight transition-transform duration-300 group-hover:scale-105">
                {requests?.data?.length}
              </h2>

              <p className="mt-2 text-sm text-muted-foreground">
                Properties listed
              </p>
            </div>

            <div className="rounded-xl bg-primary/10 p-3 transition-all duration-300 group-hover:rotate-6 group-hover:scale-110">
              <Building2 className="h-6 w-6 text-primary" />
            </div>
          </div>

          <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary transition-all duration-500 group-hover:w-full" />
        </div>

        <div className="group relative overflow-hidden rounded-2xl border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
          <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-primary/5 transition-transform duration-500 group-hover:scale-150" />

          <div className="relative flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Pending Rental Requests
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight transition-transform duration-300 group-hover:scale-105">
                {pendingCound}
              </h2>

              <p className="mt-2 text-sm text-muted-foreground">
                Incoming requests
              </p>
            </div>

            <div className="rounded-xl bg-primary/10 p-3 transition-all duration-300 group-hover:rotate-6 group-hover:scale-110">
              <ClipboardList className="h-6 w-6 text-primary" />
            </div>
          </div>

          <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary transition-all duration-500 group-hover:w-full" />
        </div>

        <div className="group relative overflow-hidden rounded-2xl border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
          <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-primary/5 transition-transform duration-500 group-hover:scale-150" />

          <div className="relative flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Total Earnings
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight transition-transform duration-300 group-hover:scale-105">
                ${totalEarning?.data?.totalEarnings}
              </h2>

              <p className="mt-2 text-sm text-muted-foreground">
                Total rental earnings
              </p>
            </div>

            <div className="rounded-xl bg-primary/10 p-3 transition-all duration-300 group-hover:rotate-6 group-hover:scale-110">
              <Wallet className="h-6 w-6 text-primary" />
            </div>
          </div>

          <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary transition-all duration-500 group-hover:w-full" />
        </div>
      </div>
    </>
  );
};

export default LandlordDashboard;
