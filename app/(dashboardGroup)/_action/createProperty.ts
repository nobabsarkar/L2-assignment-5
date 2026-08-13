"use server";

import { cookies } from "next/headers";
import { toast } from "sonner";

export const createProperty = async (
  redirectTo: string,
  formData: FormData,
) => {
  const title = formData.get("title");
  const description = formData.get("description");
  const location = formData.get("location");
  const price = Number(formData.get("price"));
  const bedrooms = Number(formData.get("bedrooms"));
  const bathrooms = Number(formData.get("bathrooms"));
  const categoryId = formData.get("categoryId");
  const amenities = formData.getAll("amenities");
  const images = formData.getAll("images");

  const payload = {
    title,
    description,
    location,
    price,
    bedrooms,
    bathrooms,
    categoryId,
    amenities,
    images,
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
