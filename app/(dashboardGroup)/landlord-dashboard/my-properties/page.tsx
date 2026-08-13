/* eslint-disable @typescript-eslint/no-explicit-any */
import { Edit, Trash2, MapPin, BedDouble, Bath } from "lucide-react";
import { landlordGetAllProperties } from "../../_action/landlordGetAllProperties";

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
                  src={property.images}
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
                <div className="mt-5 flex gap-3">
                  <button className="flex cursor-pointer flex-1 items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-blue-700">
                    <Edit size={16} />
                    Edit
                  </button>

                  <button className="flex cursor-pointer flex-1 items-center justify-center gap-2 rounded-lg bg-red-50 px-4 py-2.5 text-sm font-medium text-red-600 hover:bg-red-100">
                    <Trash2 size={16} />
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyProperties;
