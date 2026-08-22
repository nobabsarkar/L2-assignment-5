/* eslint-disable @typescript-eslint/no-explicit-any */

import { MapPin, BedDouble, Bath } from "lucide-react";
import { landlordGetAllProperties } from "../../_action/landlordGetAllProperties";
import DeleteAndUpdateButton from "../../_component/DeleteAndUpdateButton";
import Image from "next/image";

const MyProperties = async () => {
  const properties = await landlordGetAllProperties();

  return (
    <div className="min-h-screen bg-gray-50 p-4 transition-colors dark:bg-gray-950 sm:p-6">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl">
            My Properties
          </h1>

          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Manage and update your listed properties
          </p>
        </div>

        {/* Properties Grid */}
        {properties?.data?.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {properties.data.map((property: any) => (
              <div
                key={property?.id}
                className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900 dark:hover:border-gray-700"
              >
                {/* Image */}
                <div className="relative h-56 w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
                  <Image
                    src={property?.images?.[0]}
                    height={400}
                    width={400}
                    alt={property.title}
                  />

                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-5">
                  {/* Property Details */}
                  <div className="my-5 grid grid-cols-3 divide-x divide-gray-200 rounded-xl border border-gray-200 bg-gray-50 py-3 dark:divide-gray-800 dark:border-gray-800 dark:bg-gray-800/50">
                    <div className="flex flex-col items-center gap-1 text-center">
                      <BedDouble className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                      <span className="text-sm font-semibold text-gray-900 dark:text-white">
                        {property.bedrooms}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        Bedrooms
                      </span>
                    </div>

                    <div className="flex flex-col items-center gap-1 text-center">
                      <Bath className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                      <span className="text-sm font-semibold text-gray-900 dark:text-white">
                        {property.bathrooms}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        Bathrooms
                      </span>
                    </div>

                    <div className="flex flex-col items-center gap-1 text-center">
                      <span className="text-lg font-bold text-green-600 dark:text-green-500">
                        $
                      </span>
                      <span className="text-sm font-semibold text-gray-900 dark:text-white">
                        {property.price}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        Monthly
                      </span>
                    </div>
                  </div>

                  {/* Amenities */}
                  {property.amenities?.length > 0 && (
                    <div>
                      <h3 className="mb-2 text-sm font-semibold text-gray-900 dark:text-white">
                        Amenities
                      </h3>

                      <div className="flex flex-wrap gap-2">
                        {property.amenities
                          .slice(0, 5)
                          .map((amenity: string) => (
                            <span
                              key={amenity}
                              className="rounded-full border border-gray-200 bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 transition-colors dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300"
                            >
                              {amenity}
                            </span>
                          ))}

                        {property.amenities.length > 5 && (
                          <span className="rounded-full border border-green-200 bg-green-50 px-3 py-1 text-xs font-medium text-green-700 dark:border-green-900/50 dark:bg-green-950/30 dark:text-green-400">
                            +{property.amenities.length - 5} more
                          </span>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Divider */}
                  <div className="my-5 border-t border-gray-200 dark:border-gray-800" />

                  {/* Actions */}
                  <DeleteAndUpdateButton property={property} />
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="flex min-h-80 flex-col items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-white px-6 text-center dark:border-gray-700 dark:bg-gray-900">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
              <MapPin className="h-7 w-7 text-gray-400 dark:text-gray-500" />
            </div>

            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              No properties found
            </h2>

            <p className="mt-1 max-w-sm text-sm text-gray-500 dark:text-gray-400">
              You have not added any properties yet. Add your first property to
              start managing your listings.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyProperties;
