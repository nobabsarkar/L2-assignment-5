/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  BadgeCheckIcon,
  HouseIcon,
  Icon,
  MusicIcon,
  UsersIcon,
} from "lucide-react";
import Image from "next/image";
import bannerImage from "../images/bannerImage.jpg";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getProperties } from "./_action/getProperties";
import { IProperty } from "@/lib/types";
import Link from "next/link";
import { steps } from "./_action/howItIsWorks";
import {
  // Facebook,
  // Instagram,
  // Linkedin,
  // Twitter,
  Mail,
  Phone,
  MapPin,
  LandPlot,
} from "lucide-react";

const HomePage = async () => {
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
      {/* banner  */}
      {/* <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <img
          src={
            "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
          }
          alt=""
          className="absolute  inset-0 -z-10 size-full  object-cover object-right md:object-center"
        />
        <div
          aria-hidden="true"
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        >
          <div
            // style={{
            //   clipPath:
            //     " polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            // }}
            className="aspect-1097/845 w-274.25 bg-linear-to-tr from-[#1e281e] to-[#316131] opacity-50"
          ></div>
        </div>
        <div
          aria-hidden="true"
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:-top-112 sm:ml-16 sm:translate-x-0"
        >
          <div
            // style={{
            //   clipPath:
            //     "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            // }}
            className="aspect-1097/845 w-274.25 bg-linear-to-tr from-[green] to-[green] opacity-30"
          ></div>
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              Find Your Perfect Rental Home
            </h2>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-300 sm:text-xl/8">
              Discover apartments, family homes, and studio spaces in your
              preferred location. RentNest makes it easy to search, compare, and
              connect with trusted landlords.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex items-center">
                <HouseIcon size={80} className="text-white mr-5" />
                <h1 className="text-white text-3xl">Modern Apartments</h1>
              </div>
              <div className="flex items-center">
                <MusicIcon size={80} className="text-white mr-5" />
                <h1 className="text-white text-3xl">Cozy Studios</h1>
              </div>
              <div className="flex items-center">
                <UsersIcon size={80} className="text-white mr-5" />

                <h1 className="text-white text-3xl">Family Homes</h1>
              </div>
              <div className="flex items-center">
                <BadgeCheckIcon size={80} className="text-white mr-5" />

                <h1 className="text-white text-3xl">Verified Listings</h1>
              </div>
            </dl>
          </div>
        </div>
      </div> */}
      <section className="relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1920&auto=format&fit=crop"
            alt="Hero"
            className="h-full w-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-green-950/90 via-background/80 to-background/60 dark:from-black/80 dark:via-black/60 dark:to-black/40" />
        </div>

        {/* Green Glow */}
        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-green-500/20 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-green-600/20 blur-3xl" />

        <div className="relative container mx-auto grid min-h-[90vh] items-center gap-16 px-6 lg:grid-cols-2">
          {/* Left */}
          <div>
            <span className="rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 text-sm font-medium text-green-600 dark:text-green-400">
              🏡 Trusted Rental Platform
            </span>

            <h1 className="mt-6 text-5xl font-extrabold leading-tight md:text-7xl">
              Find Your
              <span className="block text-green-600">Dream Rental Home</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Browse verified apartments, family homes, and modern studios.
              Connect with trusted landlords and rent securely with RentNest.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                Browse Properties
              </Button>

              <Button variant="outline" size="lg">
                Become a Landlord
              </Button>
            </div>
          </div>

          {/* Right */}
          <div className="relative hidden lg:block">
            <div className="absolute right-10 top-0 animate-bounce rounded-2xl border bg-background/80 p-5 shadow-xl backdrop-blur">
              <h3 className="text-3xl font-bold text-green-600">2,500+</h3>
              <p className="text-muted-foreground">Verified Homes</p>
            </div>

            <div className="absolute left-0 top-40 rounded-2xl border bg-background/80 p-5 shadow-xl backdrop-blur animate-pulse">
              <h3 className="text-3xl font-bold text-green-600">4.9★</h3>
              <p className="text-muted-foreground">User Rating</p>
            </div>

            <div className="absolute right-0 bottom-20 rounded-2xl border bg-background/80 p-5 shadow-xl backdrop-blur">
              <h3 className="text-3xl font-bold text-green-600">100%</h3>
              <p className="text-muted-foreground">Secure Payment</p>
            </div>

            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=900&auto=format&fit=crop"
              alt=""
              className="mx-auto w-[500px] rounded-3xl border shadow-2xl"
            />
          </div>
        </div>
      </section>
      {/* banner  */}

      {/* card  */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-10 my-10">
        {properties?.data?.slice(0, 6).map((property: IProperty) => (
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
              <Link className="w-full" href={"/properties"}>
                <Button className="w-full cursor-pointer p-4">See More</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div> */}
      <div className="container mx-auto px-4 py-20">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold">
            Featured <span className="text-green-600">Properties</span>
          </h2>

          <p className="mt-3 text-muted-foreground">
            Explore our most popular rental properties carefully selected for
            you.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {properties?.data?.slice(0, 6).map((property: IProperty) => (
            <Card
              key={property.id}
              className="group overflow-hidden rounded-2xl border bg-background shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Image */}
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

              {/* Content */}
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

                <Link href={`/properties`}>
                  <Button className="h-11 w-full cursor-pointer rounded-lg bg-green-600 hover:bg-green-700">
                    View More
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
      {/* card  */}

      {/* why choose RentNext */}
      <section className="bg-background">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-bold tracking-tight">
              Why Choose RentNest?
            </h2>

            <p className="mt-4 text-muted-foreground">
              We make finding and managing rental properties simple, secure, and
              stress-free for both tenants and landlords.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Card 1 */}
            <div className="rounded-2xl border bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <h3 className="text-xl font-semibold">Verified Properties</h3>
              <p className="mt-3 text-muted-foreground">
                Every rental listing is verified to ensure authenticity and
                trust.
              </p>
            </div>

            {/* Card 2 */}
            <div className="rounded-2xl border bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <h3 className="text-xl font-semibold">Smart Search</h3>
              <p className="mt-3 text-muted-foreground">
                Search properties by location, price, bedrooms, and amenities.
              </p>
            </div>

            {/* Card 3 */}
            <div className="rounded-2xl border bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <h3 className="text-xl font-semibold">Affordable Pricing</h3>
              <p className="mt-3 text-muted-foreground">
                Discover rental homes that fit every budget without compromise.
              </p>
            </div>

            {/* Card 4 */}
            <div className="rounded-2xl border bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <h3 className="text-xl font-semibold">Wide Property Choices</h3>
              <p className="mt-3 text-muted-foreground">
                Browse apartments, family houses, hostels, and luxury villas.
              </p>
            </div>

            {/* Card 5 */}
            <div className="rounded-2xl border bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <h3 className="text-xl font-semibold">Prime Locations</h3>
              <p className="mt-3 text-muted-foreground">
                Find rental properties in your preferred city and neighborhood.
              </p>
            </div>

            {/* Card 6 */}
            <div className="rounded-2xl border bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <h3 className="text-xl font-semibold">Trusted Community</h3>
              <p className="mt-3 text-muted-foreground">
                Read genuine reviews and ratings from verified tenants.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* why choose RentNext */}

      {/* Rent a Property in 5 Easy Steps */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          {/* Heading */}
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700 dark:bg-green-900/30 dark:text-green-400">
              How It Works
            </span>

            <h2 className="mt-4 text-3xl font-bold md:text-5xl">
              Rent a Property in
              <span className="text-green-600"> 5 Easy Steps</span>
            </h2>

            <p className="mt-4 text-base text-muted-foreground md:text-lg">
              RentNest makes finding, requesting, and renting your dream
              property simple, secure, and completely hassle-free.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Desktop Line */}
            <div className="absolute left-1/2 top-0 hidden h-full w-1 -translate-x-1/2 rounded-full bg-green-200 dark:bg-green-900 lg:block" />

            <div className="space-y-6 lg:space-y-8">
              {steps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <div
                    key={step.id}
                    className={`flex flex-col items-center gap-6 lg:flex-row ${
                      index % 2 === 1 ? "lg:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Card */}
                    <div className="w-full lg:w-5/12">
                      <div className="group rounded-2xl border bg-background p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-500 hover:shadow-lg">
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-green-600 text-white transition-transform duration-300 group-hover:scale-110">
                          <Icon className="h-6 w-6" />
                        </div>

                        <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-green-600">
                          Step {step.id}
                        </p>

                        <h3 className="text-xl font-bold">{step.title}</h3>

                        <p className="mt-2 text-sm leading-6 text-muted-foreground">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    {/* Timeline Number */}
                    <div className="relative z-10 hidden h-12 w-12 items-center justify-center rounded-full border-4 border-background bg-green-600 text-sm font-bold text-white shadow-md lg:flex">
                      {step.id}
                    </div>

                    {/* Empty Side */}
                    <div className="hidden lg:block lg:w-5/12" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      {/* Rent a Property in 5 Easy Steps */}

      {/* footer */}
      <footer className="border-t bg-muted/30">
        <div className="container mx-auto px-4 py-16">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {/* Logo */}
            <div>
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-600 text-white shadow-lg">
                  <LandPlot className="h-6 w-6" />
                </div>

                <h2 className="text-2xl font-bold">
                  Rent<span className="text-green-600">Nest</span>
                </h2>
              </div>

              <p className="leading-7 text-muted-foreground">
                RentNest helps tenants discover verified rental properties while
                enabling landlords to manage listings, rental requests, and
                payments effortlessly.
              </p>

              {/* <div className="mt-6 flex gap-3">
                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                  <Link
                    key={index}
                    href="#"
                    className="flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 hover:bg-green-600 hover:text-white"
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                ))}
              </div> */}
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="mb-5 text-lg font-semibold">Quick Links</h3>

              <div className="space-y-3">
                <Link
                  href="/"
                  className="block transition hover:text-green-600"
                >
                  Home
                </Link>

                <Link
                  href="/properties"
                  className="block transition hover:text-green-600"
                >
                  Properties
                </Link>

                <Link
                  href="/about"
                  className="block transition hover:text-green-600"
                >
                  About Us
                </Link>

                <Link
                  href="/contact"
                  className="block transition hover:text-green-600"
                >
                  Contact
                </Link>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="mb-5 text-lg font-semibold">Services</h3>

              <div className="space-y-3">
                <p className="transition hover:text-green-600">
                  Apartment Rental
                </p>

                <p className="transition hover:text-green-600">Family Houses</p>

                <p className="transition hover:text-green-600">
                  Studio Apartments
                </p>

                <p className="transition hover:text-green-600">
                  Rental Management
                </p>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className="mb-5 text-lg font-semibold">Contact Us</h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 text-green-600" />
                  <p className="text-muted-foreground">Rajshahi, Bangladesh</p>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-green-600" />
                  <p className="text-muted-foreground">+880 1234-567890</p>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-green-600" />
                  <p className="text-muted-foreground">support@rentnest.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-12 border-t pt-6">
            <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} RentNest. All rights reserved.
              </p>

              <div className="flex gap-6 text-sm text-muted-foreground">
                <Link href="#" className="hover:text-green-600">
                  Privacy Policy
                </Link>

                <Link href="#" className="hover:text-green-600">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* footer */}
    </>
  );
};

export default HomePage;
