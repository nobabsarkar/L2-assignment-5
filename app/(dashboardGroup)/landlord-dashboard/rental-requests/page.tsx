/* eslint-disable @next/next/no-async-client-component */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { useState } from "react";
import { Check, X } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const initialRequests = [
  {
    id: 1,
    tenant: "Nobab Sarkar",
    property: "Green Residency",
    moveIn: "01 Sep 2026",
    status: "PENDING",
  },
  {
    id: 2,
    tenant: "Rakib Hossain",
    property: "City Heights",
    moveIn: "15 Sep 2026",
    status: "APPROVED",
  },
];

const RentalRequest = () => {
  const [requests, setRequests] = useState(initialRequests);

  const updateStatus = (id: number, status: "APPROVED" | "REJECTED") => {
    setRequests((prev) =>
      prev.map((request) =>
        request.id === id ? { ...request, status } : request,
      ),
    );
  };

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
                <th>Move In</th>
                <th>Status</th>
                <th className="text-right">Action</th>
              </tr>
            </thead>

            <tbody>
              {requests.map((item) => (
                <tr key={item.id} className="border-b">
                  <td className="py-4 font-medium">{item.tenant}</td>

                  <td>{item.property}</td>

                  <td>{item.moveIn}</td>

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
                    {item.status === "PENDING" ? (
                      <div className="flex justify-end gap-2">
                        <Button
                          size="sm"
                          onClick={() => updateStatus(item.id, "APPROVED")}
                        >
                          <Check className="mr-1 h-4 w-4" />
                          Approve
                        </Button>

                        <Button
                          size="sm"
                          variant="destructive"
                          onClick={() => updateStatus(item.id, "REJECTED")}
                        >
                          <X className="mr-1 h-4 w-4" />
                          Reject
                        </Button>
                      </div>
                    ) : (
                      <p className="text-right text-sm text-muted-foreground">
                        Completed
                      </p>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>

      {/* Mobile Cards */}
      <div className="grid gap-4 lg:hidden">
        {requests.map((item) => (
          <Card key={item.id}>
            <CardContent className="space-y-4 pt-6">
              <div>
                <h3 className="text-lg font-semibold">{item.tenant}</h3>
                <p className="text-muted-foreground">{item.property}</p>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Move In</span>

                <span className="font-medium">{item.moveIn}</span>
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
                    className="flex-1"
                    onClick={() => updateStatus(item.id, "APPROVED")}
                  >
                    Approve
                  </Button>

                  <Button
                    className="flex-1"
                    variant="destructive"
                    onClick={() => updateStatus(item.id, "REJECTED")}
                  >
                    Reject
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RentalRequest;
