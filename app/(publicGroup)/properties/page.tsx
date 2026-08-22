import { getProperties } from "../_action/getProperties";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { IProperty } from "@/lib/types";

import { Search, SearchIcon } from "lucide-react";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue } from "@base-ui/react";
import Image from "next/image";

type Props = {
  searchParams: Promise<{
    location?: string;
    price?: string;
  }>;
};

const properties = async ({ searchParams }: Props) => {
  const params = await searchParams;

  const properties = await getProperties({
    location: params.location,
    price: params.price,
  });

  if (!properties.success || !properties.data?.length) {
    return (
      <p className="py-12 text-center text-muted-foreground">
        You haven&apos;t created any posts yet.
      </p>
    );
  }

  return (
    <>
      {/* <div className="w-full mx-auto">
        <Field className="max-w-sm mx-auto mt-10">
          <InputGroup>
            <InputGroupInput
              className="border-2"
              id="inline-start-input"
              placeholder="Search Your Property..."
            />
            <InputGroupAddon align="inline-start">
              <SearchIcon className="text-muted-foreground" />
            </InputGroupAddon>
          </InputGroup>
        </Field>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-10 my-10">
        {properties?.data?.map((property: IProperty) => (
          <Card
            key={property.id}
            className="group overflow-hidden rounded-2xl border bg-background shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            <div className="relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"
                alt={property.title}
                className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

              <Badge className="absolute left-3 top-3 bg-green-600 text-white">
                Featured
              </Badge>

              <Button
                size="icon"
                variant="secondary"
                className="absolute right-3 top-3 h-8 w-8 rounded-full"
              >
                ❤️
              </Button>
            </div>

            <div className="space-y-4 p-5">
              <div>
                <h3 className="line-clamp-1 text-xl font-bold">
                  {property.title}
                </h3>

                <p className="mt-1 text-sm text-muted-foreground">
                  📍 {property.location}
                </p>
              </div>

              <div className="flex items-center justify-between">
                <h4 className="text-2xl font-bold text-green-600">
                  ${property.price}
                </h4>

                <span className="text-xs text-muted-foreground">/month</span>
              </div>

              <div className="flex items-center justify-between rounded-lg bg-muted/40 px-4 py-3 text-sm">
                <div>
                  🛏 <span className="font-semibold">{property.bedrooms}</span>{" "}
                  Beds
                </div>

                <div>
                  🛁 <span className="font-semibold">{property.bathrooms}</span>{" "}
                  Baths
                </div>
              </div>

              <Link href={`/properties`}>
                <Button className="h-11 w-full cursor-pointer rounded-lg bg-green-600 hover:bg-green-700">
                  View More
                </Button>
              </Link>
            </div>
          </Card>
        ))}
      </div> */}
      <div className="container mx-auto px-4 py-10">
        {/* Heading */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold">Browse Properties</h1>
          <p className="mt-2 text-muted-foreground">
            Find your perfect rental property with search and price filtering.
          </p>
        </div>

        {/* Search & Filter */}

        <form action="/properties" method="GET">
          <div className="mb-10 rounded-2xl border bg-background p-6 shadow-sm">
            <div className=" grid gap-4 md:grid-cols-3">
              {/* Search */}
              <Field className="md:col-span-2">
                <InputGroup className="h-12">
                  <InputGroupInput
                    defaultValue={params?.location}
                    name="location"
                    placeholder="Search by Name..."
                  />
                  <InputGroupAddon align="inline-start">
                    <SearchIcon className="text-muted-foreground" />
                  </InputGroupAddon>
                </InputGroup>
              </Field>

              {/* Price Filter */}
              <div>
                <input
                  defaultValue={params.price}
                  type="number"
                  name="price"
                  placeholder="Maximum Price"
                  className="h-12 w-full rounded-lg border px-3 "
                />
              </div>
            </div>

            <div className="mt-5 flex flex-wrap justify-end gap-3 items-center">
              <Button variant="outline" className="h-11 cursor-pointer">
                <Link href="/properties">Reset</Link>
              </Button>

              <Button
                type="submit"
                className="h-11 bg-green-600 hover:bg-green-700 cursor-pointer"
              >
                Search
              </Button>
            </div>
          </div>
        </form>

        {/* Property Count */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold">
            Showing {properties?.data?.length ?? 0} Properties
          </h2>
        </div>

        {/* Keep your existing cards exactly as they are */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {properties?.data?.map((property: IProperty) => (
            <Card
              key={property.id}
              className="group overflow-hidden rounded-2xl border bg-background shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="relative overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"
                  alt={property.title}
                  height={500}
                  width={500}
                  className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                <Badge className="absolute left-3 top-3 bg-green-600 text-white">
                  Featured
                </Badge>

                <Button
                  size="icon"
                  variant="secondary"
                  className="absolute right-3 top-3 h-8 w-8 rounded-full"
                >
                  ❤️
                </Button>
              </div>

              <div className="space-y-4 p-5">
                <div>
                  <h3 className="line-clamp-1 text-xl font-bold">
                    {property.title}
                  </h3>

                  <p className="mt-1 text-sm text-muted-foreground">
                    📍 {property.location}
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <h4 className="text-2xl font-bold text-green-600">
                    ${property.price}
                  </h4>
                </div>

                <div className="flex items-center justify-between rounded-lg bg-muted/40 px-4 py-3 text-sm">
                  <div>
                    🛏{" "}
                    <span className="font-semibold">{property.bedrooms}</span>{" "}
                    Beds
                  </div>

                  <div>
                    🛁{" "}
                    <span className="font-semibold">{property.bathrooms}</span>{" "}
                    Baths
                  </div>
                </div>

                <Link href={`/properties/${property?.id}`}>
                  <Button className="h-11 w-full cursor-pointer rounded-lg bg-green-600 hover:bg-green-700">
                    View Details
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default properties;
