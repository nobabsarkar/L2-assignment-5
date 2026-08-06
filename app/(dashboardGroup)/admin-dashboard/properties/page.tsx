/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { getAllProperties } from "../../_action/adminActions";

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

const Properties = async () => {
  const properties = await getAllProperties();

  return (
    <div className="space-y-5">
      {/* ================= Mobile Cards ================= */}
      <div className="grid gap-4 md:hidden">
        {properties?.data?.map((property: any) => (
          <div
            key={property.id}
            className="rounded-xl border bg-card p-4 shadow-sm"
          >
            <img
              src={property.images[0]}
              alt={property.title}
              className="h-40 w-full rounded-lg object-cover"
            />

            <div className="mt-4 space-y-2">
              <h3 className="text-lg font-semibold">{property.title}</h3>

              <p className="text-sm text-muted-foreground line-clamp-2">
                {property.description}
              </p>

              <div className="flex items-center justify-between">
                <Badge>{property.location}</Badge>
                <Badge variant="outline">${property.price}</Badge>
              </div>

              <div className="flex justify-between text-sm text-muted-foreground">
                <span>🛏 {property.bedrooms} Beds</span>
                <span>🛁 {property.bathrooms} Baths</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {property.amenities.map((item: string) => (
                  <Badge key={item} variant="secondary">
                    {item}
                  </Badge>
                ))}
              </div>

              {/* <Button className="w-full mt-3">View Details</Button> */}
            </div>
          </div>
        ))}
      </div>

      {/* ================= Desktop Table ================= */}
      <div className="hidden overflow-x-auto rounded-xl border md:block">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Image</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Bedrooms</TableHead>
              <TableHead>Bathrooms</TableHead>
              <TableHead>Amenities</TableHead>
              {/* <TableHead className="text-right">Action</TableHead> */}
            </TableRow>
          </TableHeader>

          <TableBody>
            {properties?.data?.map((property: any) => (
              <TableRow key={property.id}>
                <TableCell>
                  <img
                    src={property.images[0]}
                    alt={property.title}
                    className="h-14 w-20 rounded-md object-cover"
                  />
                </TableCell>

                <TableCell className="font-medium">{property.title}</TableCell>

                <TableCell>{property.location}</TableCell>

                <TableCell>${property.price}</TableCell>

                <TableCell>{property.bedrooms}</TableCell>

                <TableCell>{property.bathrooms}</TableCell>

                <TableCell>
                  <div className="flex flex-wrap gap-1">
                    {property.amenities.map((item: string) => (
                      <Badge key={item} variant="secondary">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </TableCell>

                {/* <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button size="sm">Edit</Button>

                    <Button size="sm" variant="destructive">
                      Delete
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

export default Properties;
