/* eslint-disable @typescript-eslint/no-explicit-any */

import { MapPin, BedDouble, Bath } from "lucide-react";
import { landlordGetAllProperties } from "../../_action/landlordGetAllProperties";
import DeleteAndUpdateButton from "../../_component/DeleteAndUpdateButton";

const MyProperties = async () => {
  const properties = await landlordGetAllProperties();

  return (
    <div className="p-4 sm:p-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6">
          <h1 className="text-2xl font-bold">My Properties</h1>
          <p className="mt-1 text-sm text-gray-500">Manage your properties</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {properties?.data?.map((property: any) => (
            <div
              key={property.id}
              className="overflow-hidden rounded-xl border bg-white shadow-sm"
            >
              {/* Image */}
              <div className="h-52 w-full">
                <img
                  src={property.images[0]}
                  alt={property.title}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h2 className="text-xl font-semibold">{property.title}</h2>

                <div className="mt-2 flex items-center gap-1 text-sm text-gray-500">
                  <MapPin size={16} />
                  {property.location}
                </div>

                <p className="mt-3 line-clamp-2 text-sm text-gray-500">
                  {property.description}
                </p>

                {/* Details */}
                <div className="my-4 flex items-center gap-5 border-y py-4 text-sm">
                  <div className="flex items-center gap-1">
                    <BedDouble size={17} />
                    {property.bedrooms} Beds
                  </div>

                  <div className="flex items-center gap-1">
                    <Bath size={17} />
                    {property.bathrooms} Baths
                  </div>

                  <div className="font-semibold">${property.price}</div>
                </div>

                {/* Amenities */}
                <div className="flex flex-wrap gap-2">
                  {property.amenities.map((amenity: any) => (
                    <span
                      key={amenity}
                      className="rounded-full bg-gray-100 px-3 py-1 text-xs"
                    >
                      {amenity}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <DeleteAndUpdateButton property={property} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyProperties;
