import { getAllCategoryes } from "../../_action/getAllCaategory";
import CreatePropertyComponent from "../../_component/CreatePropertyComponent";

const CreateProperty = async () => {
  const categories = await getAllCategoryes();

  return (
    <div className="min-h-screen bg-muted/30 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Create Property
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Add a new rental property to your listings.
          </p>
        </div>

        {/* Form Card */}
        <div className="rounded-xl border bg-background p-5 shadow-sm sm:p-8">
          <CreatePropertyComponent categories={categories} />
        </div>
      </div>
    </div>
  );
};

export default CreateProperty;
