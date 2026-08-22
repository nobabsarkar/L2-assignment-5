/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { getAllRentals } from "../../_action/adminActions";

import { Badge } from "@/components/ui/badge";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";

const Rentals = async () => {
  const rentals = await getAllRentals();

  return (
    <div className="space-y-5">
      <div className="grid gap-4 md:hidden">
        {rentals?.data?.map((request: any) => (
          <div
            key={request.id}
            className="rounded-xl border bg-card p-4 shadow-sm"
          >
            <Image
              src={request.property.images?.[0]}
              height={400}
              width={400}
              alt={request.property.title}
              className="h-44 w-full rounded-lg object-cover"
            />

            <div className="mt-4 space-y-3">
              <div>
                <h3 className="text-lg font-semibold">
                  {request.property.title}
                </h3>

                <p className="text-sm text-muted-foreground">
                  {request.property.location}
                </p>
              </div>

              <div className="flex items-center justify-between">
                <Badge variant="outline">${request.property.price}</Badge>

                <Badge
                  className={
                    request.status === "APPROVED"
                      ? "bg-green-600 hover:bg-green-600"
                      : request.status === "PENDING"
                        ? "bg-yellow-500 hover:bg-yellow-500"
                        : "bg-red-600 hover:bg-red-600"
                  }
                >
                  {request.status}
                </Badge>
              </div>

              <div className="space-y-1 text-sm">
                <p>
                  <span className="font-medium">Tenant:</span>{" "}
                  {request.tenant.name}
                </p>

                <p>
                  <span className="font-medium">Email:</span>{" "}
                  {request.tenant.email}
                </p>

                <p>
                  <span className="font-medium">Beds:</span>{" "}
                  {request.property.bedrooms}
                </p>

                <p>
                  <span className="font-medium">Baths:</span>{" "}
                  {request.property.bathrooms}
                </p>
              </div>

              {/* <Button className="w-full">View Details</Button> */}
            </div>
          </div>
        ))}
      </div>

      <div className="hidden overflow-x-auto rounded-xl border md:block">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Property</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Tenant</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Status</TableHead>
              {/* <TableHead>Created</TableHead>
              <TableHead className="text-right">Action</TableHead> */}
            </TableRow>
          </TableHeader>

          <TableBody>
            {rentals?.data?.map((rent: any) => (
              <TableRow key={rent.id}>
                <TableCell>
                  <Image
                    src={rent.property.images?.[0]}
                    height={200}
                    width={200}
                    alt={rent.property.title}
                    className="h-14 w-20 rounded-md object-cover"
                  />
                </TableCell>

                <TableCell className="font-medium">
                  {rent.property.title}
                </TableCell>

                <TableCell>{rent.tenant.name}</TableCell>

                <TableCell>{rent.tenant.email}</TableCell>

                <TableCell>{rent.property.location}</TableCell>

                <TableCell>${rent.property.price}</TableCell>

                <TableCell>
                  <Badge
                    className={
                      rent.status === "APPROVED"
                        ? "bg-green-600 hover:bg-green-600"
                        : rent.status === "PENDING"
                          ? "bg-yellow-500 hover:bg-yellow-500"
                          : "bg-red-600 hover:bg-red-600"
                    }
                  >
                    {rent.status}
                  </Badge>
                </TableCell>

                {/* <TableCell>
                  {new Date(rent.property.createdAt).toLocaleDateString()}
                </TableCell> */}

                {/* <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button size="sm">Details</Button>

                    <Button size="sm" variant="destructive">
                      Remove
                    </Button>
                  </div>
                </TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Rentals;
