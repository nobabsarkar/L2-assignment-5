/* eslint-disable @next/next/no-async-client-component */
/* eslint-disable @next/next/no-img-element */

import { getSingleProperty } from "../../_action/getProperties";
import RentalRequestButton from "../../_components/rentalRequestButton";
import { Star, MessageCircle, User } from "lucide-react";

// ==========================================
// Hardcoded Reviews
// Replace this with API data later
// ==========================================
const reviews = [
  {
    id: "1",
    name: "Rahim Ahmed",
    rating: 5,
    comment:
      "Amazing property! The location is excellent and the apartment was very clean and comfortable. Highly recommended.",
    date: "August 18, 2026",
  },
  {
    id: "2",
    name: "Sadia Islam",
    rating: 4,
    comment:
      "Really nice place to stay. The landlord was helpful and everything was exactly as described.",
    date: "August 12, 2026",
  },
  {
    id: "3",
    name: "Tanvir Hasan",
    rating: 5,
    comment:
      "One of the best rental properties I have stayed in. Very peaceful environment and good facilities.",
    date: "August 5, 2026",
  },
  {
    id: "4",
    name: "Nusrat Jahan",
    rating: 4,
    comment:
      "The property is beautiful and the location is convenient. Overall, I had a very good experience.",
    date: "July 28, 2026",
  },
];

const PropertyDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  const propertyDetails = await getSingleProperty(id);

  const property = propertyDetails?.data;

  // ==========================================
  // Review Calculation
  // ==========================================

  const totalReviews = reviews.length;

  const averageRating =
    totalReviews > 0
      ? reviews.reduce((total, review) => total + review.rating, 0) /
        totalReviews
      : 0;

  // ==========================================
  // Star Component
  // ==========================================

  const renderStars = (rating: number, size = "h-5 w-5") => {
    return (
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`${size} ${
              star <= rating
                ? "fill-yellow-400 text-yellow-400"
                : "fill-transparent text-gray-300 dark:text-gray-700"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="grid gap-10 lg:grid-cols-3">
        {/* =====================================================
            LEFT CONTENT
        ====================================================== */}

        <div className="space-y-6 lg:col-span-2">
          {/* =====================================================
              MAIN IMAGE
          ====================================================== */}

          <div className="overflow-hidden rounded-2xl border bg-background shadow-md">
            <img
              src={property?.images?.[0]}
              alt={property?.title || "Property"}
              className="h-[450px] w-full object-cover transition duration-500 hover:scale-105"
            />
          </div>

          {/* =====================================================
              THUMBNAIL IMAGES
          ====================================================== */}

          {property?.images?.length > 1 && (
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {property.images.slice(1).map((image: string, index: number) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-xl border bg-background shadow-sm"
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

          {/* =====================================================
              PROPERTY INFO
          ====================================================== */}

          <div className="rounded-2xl border bg-background p-6 shadow-sm">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h1 className="text-3xl font-bold">{property?.title}</h1>

                <p className="mt-2 text-muted-foreground">
                  📍 {property?.location}
                </p>
              </div>

              <div className="rounded-xl bg-green-600 px-5 py-3 text-center text-white shadow">
                <h2 className="text-3xl font-bold">${property?.price}</h2>
              </div>
            </div>

            <hr className="my-6" />

            <h2 className="mb-3 text-xl font-semibold">Description</h2>

            <p className="leading-7 text-muted-foreground">
              {property?.description}
            </p>
          </div>

          {/* =====================================================
              PROPERTY FEATURES
          ====================================================== */}

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

          {/* =====================================================
              AMENITIES
          ====================================================== */}

          <div className="rounded-2xl border bg-background p-6 shadow-sm">
            <h2 className="mb-5 text-xl font-semibold">Amenities</h2>

            <div className="flex flex-wrap gap-3">
              {property?.amenities?.map((amenity: string, index: number) => (
                <span
                  key={index}
                  className="rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700 dark:bg-green-950 dark:text-green-400"
                >
                  ✓ {amenity}
                </span>
              ))}
            </div>
          </div>

          {/* =====================================================
              REVIEWS
          ====================================================== */}

          <div className="rounded-2xl border bg-background p-6 shadow-sm md:p-8">
            {/* Review Header */}
            <div className="mb-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-100 dark:bg-green-950">
                    <MessageCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold">Tenant Reviews</h2>

                    <p className="text-sm text-muted-foreground">
                      What previous tenants say about this property
                    </p>
                  </div>
                </div>
              </div>

              {/* Average Rating */}
              <div className="flex items-center gap-4 rounded-2xl border bg-muted/40 px-5 py-4">
                <div className="text-center">
                  <p className="text-3xl font-bold">
                    {averageRating.toFixed(1)}
                  </p>

                  <div className="mt-1">
                    {renderStars(Math.round(averageRating), "h-4 w-4")}
                  </div>
                </div>

                <div className="h-12 w-px bg-border" />

                <div>
                  <p className="text-lg font-bold">{totalReviews}</p>

                  <p className="text-xs text-muted-foreground">
                    {totalReviews === 1 ? "Review" : "Reviews"}
                  </p>
                </div>
              </div>
            </div>

            {/* Review List */}
            {totalReviews === 0 ? (
              <div className="rounded-2xl border border-dashed bg-muted/30 px-6 py-14 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-950">
                  <MessageCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
                </div>

                <h3 className="text-lg font-semibold">No reviews yet</h3>

                <p className="mt-2 text-sm text-muted-foreground">
                  Be the first tenant to review this property.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {reviews.map((review) => (
                  <div
                    key={review.id}
                    className="rounded-2xl border bg-muted/20 p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md dark:bg-muted/10"
                  >
                    <div className="flex gap-4">
                      {/* Avatar */}
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-green-100 font-bold text-green-700 dark:bg-green-950 dark:text-green-400">
                        {review.name.charAt(0).toUpperCase()}
                      </div>

                      {/* Review Content */}
                      <div className="min-w-0 flex-1">
                        {/* User + Rating */}
                        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                          <div>
                            <div className="flex items-center gap-2">
                              <User className="h-4 w-4 text-muted-foreground" />

                              <h3 className="font-semibold">{review.name}</h3>
                            </div>

                            <p className="mt-1 text-xs text-muted-foreground">
                              {review.date}
                            </p>
                          </div>

                          {/* Stars */}
                          {renderStars(review.rating)}
                        </div>

                        {/* Comment */}
                        <div className="mt-4 rounded-xl bg-background p-4">
                          <p className="text-sm leading-6 text-muted-foreground">
                            &ldquo;
                            {review.comment}
                            &rdquo;
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Review Footer */}
            {totalReviews > 0 && (
              <div className="mt-6 rounded-xl bg-green-50 p-4 text-center dark:bg-green-950/30">
                <p className="text-sm font-medium text-green-700 dark:text-green-400">
                  ⭐ {averageRating.toFixed(1)} / 5
                </p>

                <p className="mt-1 text-xs text-muted-foreground">
                  Based on {totalReviews} tenant reviews
                </p>
              </div>
            )}
          </div>
        </div>

        {/* =====================================================
            RIGHT SIDEBAR
        ====================================================== */}

        <div>
          <div className="sticky top-24 space-y-6">
            {/* =====================================================
                PRICE CARD
            ====================================================== */}

            <div className="rounded-2xl border bg-background p-6 shadow-lg">
              <div className="mb-6 text-center">
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

                <div className="flex items-center justify-between gap-3 rounded-lg bg-muted p-3">
                  <span>📍 Location</span>

                  <span className="text-right font-semibold">
                    {property?.location}
                  </span>
                </div>
              </div>

              <RentalRequestButton propertyId={id} />
            </div>

            {/* =====================================================
                LANDLORD INFORMATION
            ====================================================== */}

            <div className="rounded-2xl border bg-background p-6 shadow-lg">
              <h3 className="mb-5 text-xl font-semibold">Property Owner</h3>

              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-green-100 text-xl font-bold text-green-700 dark:bg-green-950 dark:text-green-400">
                  {property?.landlord?.name?.charAt(0).toUpperCase()}
                </div>

                <div>
                  <h4 className="text-lg font-semibold">
                    {property?.landlord?.name}
                  </h4>

                  <p className="text-sm text-muted-foreground">
                    ✓ Verified Landlord
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailsPage;
