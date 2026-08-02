import Link from "next/link";
import { Home, ArrowLeft, SearchX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const NotFound = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-background via-background to-muted/40 px-6">
      <Card className="w-full max-w-2xl border-0 shadow-2xl">
        <CardContent className="flex flex-col items-center px-8 py-14 text-center">
          <div className="mb-8 rounded-full bg-primary/10 p-6">
            <SearchX className="h-16 w-16 text-primary" />
          </div>

          <span className="mb-2 rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
            Error 404
          </span>

          <h1 className="mt-4 text-5xl font-extrabold tracking-tight md:text-6xl">
            Page Not Found
          </h1>

          <p className="mt-6 max-w-lg text-muted-foreground">
            Sorry, the page youre looking for doesnt exist, has been moved, or
            you dont have permission to access it.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button size="lg">
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>

            <Button size="lg" variant="outline">
              <Link href="#">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Go Back
              </Link>
            </Button>
          </div>

          <div className="mt-12 grid w-full grid-cols-3 gap-3">
            <div className="h-2 rounded-full bg-primary/80" />
            <div className="h-2 rounded-full bg-primary/50" />
            <div className="h-2 rounded-full bg-primary/20" />
          </div>
        </CardContent>
      </Card>
    </main>
  );
};

export default NotFound;
