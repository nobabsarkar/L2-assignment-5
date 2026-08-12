"use server";

import { cookies } from "next/headers";

export const createProperty = async (
  redirectTo: string,
  formData: FormData,
) => {
  const title = formData.get("title");
  const description = formData.get("description");
  const location = formData.get("location");
  const price = formData.get("price");
  const bedrooms = formData.get("bedrooms");
  const bathrooms = formData.get("bathrooms");
  const category = formData.get("category");
  const amenities = formData.getAll("amenities");
  const imageUrl = formData.get("imageUrl");

  const payload = {
    title,
    description,
    location,
    price,
    bedrooms,
    bathrooms,
    category,
    amenities,
    imageUrl,
  };

  const token = (await cookies()).get("accessToken")?.value;

  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/landlord/properties`,
    {
      method: "POST",
      headers: {
        Authorization: token!,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    },
  );

  const result = await res.json();

  console.log(result);

  return result;
};
