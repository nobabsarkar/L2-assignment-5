/* eslint-disable @typescript-eslint/no-explicit-any */
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

import { SearchIcon } from "lucide-react";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";

const properties = async () => {
  const properties = await getProperties();

  if (!properties.success || !properties.data?.length) {
    return (
      <p className="py-12 text-center text-muted-foreground">
        You haven&apos;t created any posts yet.
      </p>
    );
  }

  return (
    <>
      <div className="w-full mx-auto">
        <Field className="max-w-sm mx-auto mt-10">
          {/* <FieldLabel htmlFor="inline-start-input">Input</FieldLabel> */}
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
          {/* <FieldDescription>Icon positioned at the start.</FieldDescription> */}
        </Field>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-10 my-10">
        {properties?.data?.map((property: IProperty) => (
          <Card key={property.id} className="relative  ">
            <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
            <img
              src="https://avatar.vercel.sh/shadcn1"
              alt="Event cover"
              className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
            />
            <CardHeader>
              <CardAction>
                <Badge variant="secondary">Featured</Badge>
              </CardAction>
              <CardTitle>{property?.title}</CardTitle>
              <CardDescription>
                A practical talk on component APIs, accessibility, and shipping
                faster.
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button className="w-full">View Event</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
};

export default properties;
