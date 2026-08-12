"use server";

export const getAllCategoryes = async () => {
  const res = await fetch(`${process.env.BACKEND_API_URL}/api/categories`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const result = await res.json();

  return result;
};
