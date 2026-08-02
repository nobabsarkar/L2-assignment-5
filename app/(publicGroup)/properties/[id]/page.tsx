import React from "react";
import { getSingleProperty } from "../../_action/getProperties";
import { IProperty } from "@/lib/types";
import { Button } from "@/components/ui/button";

const PropertyDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  const propertyDetails = await getSingleProperty(id);

  const property = propertyDetails?.data;

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="grid gap-10 lg:grid-cols-3">
        {/* Left Content */}
        <div className="space-y-6 lg:col-span-2">
          {/* Main Image */}
          <div className="overflow-hidden rounded-2xl border shadow-md">
            <img
              src={property?.images?.[0]}
              alt={property?.title}
              className="h-[450px] w-full object-cover transition duration-500 hover:scale-105"
            />
          </div>

          {/* Thumbnail Images */}
          {property?.images?.length > 1 && (
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {property?.images.slice(1).map((image: string, index: number) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-xl border shadow-sm"
                >
                  <img
                    src={image}
                    alt={`Property ${index + 2}`}
                    className="h-32 w-full object-cover transition duration-300 hover:scale-110"
                  />
                </div>
              ))}
            </div>
          )}

          {/* Property Info */}
          <div className="rounded-2xl border bg-background p-6 shadow-sm">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h1 className="text-3xl font-bold">{property?.title}</h1>
                <p className="mt-2 text-muted-foreground">
                  📍 {property?.location}
                </p>
              </div>

              <div className="rounded-xl bg-green-600 px-5 py-3 text-center text-white shadow">
                <p className="text-sm">Monthly Rent</p>
                <h2 className="text-3xl font-bold">${property?.price}</h2>
              </div>
            </div>

            <hr className="my-6" />

            <h2 className="mb-3 text-xl font-semibold">Description</h2>

            <p className="leading-7 text-muted-foreground">
              {property?.description}
            </p>
          </div>

          {/* Features */}
          <div className="rounded-2xl border bg-background p-6 shadow-sm">
            <h2 className="mb-5 text-xl font-semibold">Property Features</h2>

            <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
              <div className="rounded-xl bg-muted p-4 text-center">
                <p className="text-3xl">🛏</p>
                <h3 className="mt-2 font-semibold">{property?.bedrooms}</h3>
                <p className="text-sm text-muted-foreground">Bedrooms</p>
              </div>

              <div className="rounded-xl bg-muted p-4 text-center">
                <p className="text-3xl">🛁</p>
                <h3 className="mt-2 font-semibold">{property?.bathrooms}</h3>
                <p className="text-sm text-muted-foreground">Bathrooms</p>
              </div>

              <div className="rounded-xl bg-muted p-4 text-center">
                <p className="text-3xl">🏡</p>
                <h3 className="mt-2 font-semibold">Rental</h3>
                <p className="text-sm text-muted-foreground">Property</p>
              </div>

              <div className="rounded-xl bg-muted p-4 text-center">
                <p className="text-3xl">⭐</p>
                <h3 className="mt-2 font-semibold">Featured</h3>
                <p className="text-sm text-muted-foreground">Listing</p>
              </div>
            </div>
          </div>

          {/* Amenities */}
          <div className="rounded-2xl border bg-background p-6 shadow-sm">
            <h2 className="mb-5 text-xl font-semibold">Amenities</h2>

            <div className="flex flex-wrap gap-3">
              {property?.amenities.map((amenity: string, index: number) => (
                <span
                  key={index}
                  className="rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700"
                >
                  ✓ {amenity}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Sidebar */}

        <div>
          <div className="sticky top-24 space-y-6">
            {/* Price Card */}
            <div className="rounded-2xl border bg-background p-6 shadow-lg">
              <div className="mb-6 text-center">
                <p className="text-muted-foreground">Monthly Rent</p>

                <h2 className="mt-2 text-4xl font-bold text-green-600">
                  ${property?.price}
                </h2>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between rounded-lg bg-muted p-3">
                  <span>🛏 Bedrooms</span>
                  <span className="font-semibold">{property?.bedrooms}</span>
                </div>

                <div className="flex items-center justify-between rounded-lg bg-muted p-3">
                  <span>🛁 Bathrooms</span>
                  <span className="font-semibold">{property?.bathrooms}</span>
                </div>

                <div className="flex items-center justify-between rounded-lg bg-muted p-3">
                  <span>📍 Location</span>
                  <span className="font-semibold">{property?.location}</span>
                </div>
              </div>

              <Button className="mt-8 h-12 w-full bg-green-600 text-base hover:bg-green-700">
                Rental Request
              </Button>
            </div>

            {/* Landlord Information */}
            <div className="rounded-2xl border bg-background p-6 shadow-lg">
              <h3 className="mb-5 text-xl font-semibold">Property Owner</h3>

              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-xl font-bold text-green-700">
                  {property?.landlord?.name?.charAt(0).toUpperCase()}
                </div>

                <div>
                  <h4 className="text-lg font-semibold">
                    {property?.landlord?.name}
                  </h4>

                  <p className="text-sm text-muted-foreground">
                    Verified Landlord
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="rounded-lg bg-muted p-3">
                  <p className="text-xs text-muted-foreground">Name</p>
                  <p className="font-medium">{property?.landlord?.name}</p>
                </div>

                <div className="rounded-lg bg-muted p-3">
                  <p className="text-xs text-muted-foreground">Email</p>
                  <p className="break-all font-medium">
                    {property?.landlord?.email}
                  </p>
                </div>

                <div className="rounded-lg bg-muted p-3">
                  <p className="text-xs text-muted-foreground">Phone</p>
                  <p className="font-medium">
                    {property?.landlord?.phone || "Not Available"}
                  </p>
                </div>
              </div>

              <Button variant="outline" className="mt-6 w-full">
                Contact Owner
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailsPage;
