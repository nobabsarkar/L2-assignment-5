/* eslint-disable @typescript-eslint/no-explicit-any */
import { getAllCategoryes } from "@/app/(dashboardGroup)/_action/getAllCaategory";
import UpdatePropertyForm from "@/app/(dashboardGroup)/_component/UpdatePropertyForm";
import { getSingleProperty } from "@/app/(publicGroup)/_action/getProperties";
import { Button } from "@/components/ui/button";

const UpdateProperty = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  const categories = await getAllCategoryes();

  const properties = await getSingleProperty(id);

  return (
    <div className="min-h-screen bg-muted/30 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-3xl">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Edit Property
          </h1>

          <p className="mt-2 text-sm text-muted-foreground">
            Update your property information and keep your listing up to date.
          </p>
        </div>

        {/* Form Card */}
        <div className="rounded-xl border bg-background p-5 shadow-sm sm:p-7">
          <UpdatePropertyForm
            properties={properties}
            categories={categories}
            propertyId={id}
          />
        </div>
      </div>
    </div>
  );
};

export default UpdateProperty;
