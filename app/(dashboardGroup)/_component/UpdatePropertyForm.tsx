/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Button } from "@/components/ui/button";
import { useActionState, useEffect } from "react";
import { landlordUpdateProperty } from "../_action/landlordUpdateProperty";
import { toast } from "sonner";
import { Spinner } from "@/components/ui/spinner";

const UpdatePropertyForm = ({ properties, categories }: any) => {
  const [state, action, pending] = useActionState(
    landlordUpdateProperty,
    false,
  );

  useEffect(() => {
    if (!state) return;

    if (state?.success) {
      toast.success("Property Update Successfully");
    } else {
      toast.error(state?.message || "Something is wrong!");
    }
  }, [state]);

  return (
    <form action={action} className="space-y-7">
      {/* Basic Information */}
      <div>
        <div className="space-y-5">
          {/* Title */}
          <input type="hidden" name="propertyId" value={properties?.data?.id} />

          <div className="space-y-2">
            <label htmlFor="title" className="text-sm font-medium">
              Property Title
            </label>

            <input
              id="title"
              name="title"
              type="text"
              defaultValue={properties?.data?.title}
              placeholder="Enter property title"
              required
              className="w-full rounded-md border bg-background px-3 py-2.5 text-sm outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <label htmlFor="description" className="text-sm font-medium">
              Description
            </label>

            <textarea
              id="description"
              name="description"
              rows={5}
              defaultValue={properties?.data?.description}
              placeholder="Write a description about your property..."
              required
              className="w-full resize-y rounded-md border bg-background px-3 py-2.5 text-sm outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>
        </div>
      </div>

      {/* Property Details */}

      <div className="space-y-5">
        {/* Location */}
        <div className="space-y-2">
          <label htmlFor="location" className="text-sm font-medium">
            Location
          </label>

          <input
            id="location"
            name="location"
            type="text"
            defaultValue={properties?.data?.location}
            placeholder="e.g. Rajshahi, Bangladesh"
            required
            className="w-full rounded-md border bg-background px-3 py-2.5 text-sm outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>

        {/* Price / Bedrooms / Bathrooms */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {/* Price */}
          <div className="space-y-2">
            <label htmlFor="price" className="text-sm font-medium">
              Price
            </label>

            <input
              id="price"
              name="price"
              type="number"
              min="0"
              defaultValue={properties?.data?.price}
              placeholder="15000"
              required
              className="w-full rounded-md border bg-background px-3 py-2.5 text-sm outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>

          {/* Bedrooms */}
          <div className="space-y-2">
            <label htmlFor="bedrooms" className="text-sm font-medium">
              Bedrooms
            </label>

            <input
              id="bedrooms"
              name="bedrooms"
              type="number"
              min="0"
              defaultValue={properties?.data?.bedrooms}
              placeholder="3"
              required
              className="w-full rounded-md border bg-background px-3 py-2.5 text-sm outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>

          {/* Bathrooms */}
          <div className="space-y-2">
            <label htmlFor="bathrooms" className="text-sm font-medium">
              Bathrooms
            </label>

            <input
              id="bathrooms"
              name="bathrooms"
              type="number"
              min="0"
              defaultValue={properties?.data?.bathrooms}
              placeholder="2"
              required
              className="w-full rounded-md border bg-background px-3 py-2.5 text-sm outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>
        </div>

        {/* Category */}
        <div className="space-y-2">
          <label htmlFor="categoryId" className="text-sm font-medium">
            Category
          </label>

          <select
            id="categoryId"
            name="categoryId"
            defaultValue={properties?.data?.categoryId ?? ""}
            required
            className="w-full rounded-md border bg-background px-3 py-2.5 text-sm outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
          >
            {/* <option value="">Select category</option> */}

            {categories?.data?.map((category: any) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Amenities */}

      <div className="mb-5">
        <h2 className="text-lg font-semibold">Amenities</h2>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {["WiFi", "Parking", "Lift", "Security"].map((amenity) => (
          <label
            key={amenity}
            className="flex cursor-pointer items-center gap-2.5 rounded-md border px-3 py-3 text-sm transition hover:bg-muted/50"
          >
            <input
              name="amenities"
              type="checkbox"
              value={amenity}
              defaultChecked={properties?.data?.amenities?.includes(amenity)}
              className="h-4 w-4 cursor-pointer"
            />

            <span>{amenity}</span>
          </label>
        ))}
      </div>

      {/* Images */}

      <div className="space-y-2">
        <label htmlFor="images" className="text-sm font-medium">
          Image URL
        </label>

        <input
          id="images"
          type="url"
          name="images"
          defaultValue={properties?.data?.images?.[0] ?? ""}
          placeholder="https://example.com/image.jpg"
          required
          className="w-full rounded-md border bg-background px-3 py-2.5 text-sm outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
      </div>

      {/* Actions */}
      <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
        <Button type="submit" className="w-full cursor-pointer px-6 sm:w-auto">
          {/* Update Property */}
          {pending ? <Spinner /> : "Update Property"}
        </Button>
      </div>
    </form>
  );
};

export default UpdatePropertyForm;
