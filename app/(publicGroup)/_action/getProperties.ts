/* eslint-disable @typescript-eslint/no-explicit-any */

type TPropertyQuery = {
  location?: string;
  price?: string;
};

export const getProperties = async (query?: TPropertyQuery) => {
  const params = new URLSearchParams();

  if (query?.location) {
    params.append("location", query.location);
  }

  if (query?.price) {
    params.append("price", query.price);
  }

  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/properties?${params.toString()}`,
  );

  const result = await res.json();
  return result;
};

export const getSingleProperty = async (id: string) => {
  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/properties/${id}`,
  );

  const result = await res.json();

  return result;
};
