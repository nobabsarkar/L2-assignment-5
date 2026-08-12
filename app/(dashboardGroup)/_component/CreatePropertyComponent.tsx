/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useActionState } from "react";
import { createProperty } from "../_action/createProperty";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";

const CreatePropertyComponent = ({ categories }: any) => {
  const [state, action, pending] = useActionState(createProperty, false);

  return (
    <form action={action} className="space-y-6">
      {/* Title */}
      <div className="space-y-2">
        <label htmlFor="title" className="text-sm font-medium">
          Property Title
        </label>

        <input
          id="title"
          name="title"
          type="text"
          placeholder="Luxury Apartment"
          required
          className="w-full rounded-md border bg-background px-3 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
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
          placeholder="Write your Property..."
          required
          className="w-full resize-none rounded-md border bg-background px-3 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
      </div>

      {/* Location + Price */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="location" className="text-sm font-medium">
            Location
          </label>

          <input
            id="location"
            name="location"
            type="text"
            placeholder="Location"
            required
            className="w-full rounded-md border bg-background px-3 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="price" className="text-sm font-medium">
            Price
          </label>

          <input
            id="price"
            name="price"
            type="number"
            min="0"
            placeholder="Price"
            required
            className="w-full rounded-md border bg-background px-3 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>
      </div>

      {/* Bedrooms + Bathrooms + Category */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        <div className="space-y-2">
          <label htmlFor="bedrooms" className="text-sm font-medium">
            Bedrooms
          </label>

          <input
            id="bedrooms"
            name="bedrooms"
            type="number"
            min="0"
            placeholder="Bedrooms"
            required
            className="w-full rounded-md border bg-background px-3 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="bathrooms" className="text-sm font-medium">
            Bathrooms
          </label>

          <input
            id="bathrooms"
            name="bathrooms"
            type="number"
            min="0"
            placeholder="Bathrooms"
            required
            className="w-full rounded-md border bg-background px-3 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="categoryId" className="text-sm font-medium">
            Category
          </label>

          <select
            id="categoryId"
            name="category"
            required
            className="w-full rounded-md border bg-background px-3 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
          >
            <option>Select category</option>

            {categories?.data?.map((category: any) => {
              return (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              );
            })}
          </select>
        </div>
      </div>

      {/* Amenities */}
      <div className="space-y-3">
        <label className="text-sm font-medium">Amenities</label>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {["WiFi", "Parking", "Lift", "Security"].map((amenity) => (
            <label
              key={amenity}
              className="flex cursor-pointer items-center gap-2 rounded-md border p-3 text-sm transition hover:bg-muted"
            >
              <input
                name="amenities"
                type="checkbox"
                value={amenity}
                className="h-4 w-4"
              />

              <span>{amenity}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Images */}
      <div className="space-y-3">
        <div className="flex items-center justify-between gap-3">
          <label className="text-sm font-medium">Images</label>
        </div>

        <div className="space-y-3">
          <div className="flex flex-col gap-2 sm:flex-row">
            <input
              type="url"
              name="imageUrl"
              placeholder="image url"
              required
              className="w-full rounded-md border bg-background px-3 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>
        </div>
      </div>

      {/* Submit */}
      <div className="flex flex-col-reverse gap-3 border-t pt-6 sm:flex-row sm:justify-end">
        <Button
          type="submit"
          className="rounded-md cursor-pointer bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
        >
          {pending ? <Spinner /> : "Create Property"}
        </Button>
      </div>
    </form>
  );
};

export default CreatePropertyComponent;
