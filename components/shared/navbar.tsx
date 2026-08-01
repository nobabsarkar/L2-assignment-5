"use client";

import { useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import {
  LogOut,
  Sun,
  Moon,
  Menu,
  LayoutDashboard,
  LandPlot,
  User,
  CreditCard,
  Settings,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Properties", href: "/properties" },
  { label: "About", href: "/about" },
  { label: "Service", href: "/service" },
  { label: "Contact", href: "/contact" },
  // { label: "News", href: "/news" },
  // { label: "Premium", href: "/premium" },
];

const userMenuItems = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    action: "dashboard",
  },
  // { label: "Profile", href: "/profile", icon: User, shortcut: "⇧⌘P" },
  // { label: "Billing", href: "/billing", icon: CreditCard, shortcut: "⌘B" },
  // { label: "Settings", href: "/settings", icon: Settings, shortcut: "⌘S" },
];

function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label="Toggle theme"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      <Sun className="scale-100 rotate-0 transition-transform dark:scale-0 dark:-rotate-90" />
      <Moon className="absolute scale-0 rotate-90 transition-transform dark:scale-100 dark:rotate-0" />
    </Button>
  );
}

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const user = {
    success: {
      // name: "nobab",
    },
  };

  return (
    // <header className="sticky top-0 z-40 w-full border-b bg-background">
    //   <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-2 px-4 sm:gap-4">
    //     {/* Logo */}
    //     <Link href="/" className="flex items-center gap-2">
    //       <span className="flex size-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
    //         <LandPlot data-icon="inline-start" />
    //       </span>
    //       <span className="text-lg font-semibold tracking-tight">RentNest</span>
    //     </Link>

    //     {/* Nav links (tablet and up) */}
    //     <nav className="hidden items-center gap-1 md:flex">
    //       {navItems.map((item) => (
    //         // <Button

    //         //   key={item.href}
    //         //   variant="ghost"
    //         //   size="sm"
    //         //   nativeButton={false}
    //         //   render={<Link href={item.href} />}
    //         // >
    //         //   {item.label}
    //         // </Button>

    //         <Link className="cursor-pointer" key={item.href} href={item.href}>
    //           <Button variant="ghost" size="sm">
    //             {item.label}
    //           </Button>
    //         </Link>
    //       ))}
    //     </nav>

    //     {/* Right side: theme toggle + user dropdown + mobile menu */}
    //     <div className="flex items-center gap-2">
    //       <ThemeToggle />
    //       {user?.success ? (
    //         <DropdownMenu>
    //           <DropdownMenuTrigger
    //             render={
    //               <Button
    //                 variant="ghost"
    //                 className="relative size-9 rounded-full p-0"
    //                 aria-label="Open user menu"
    //               />
    //             }
    //           >
    //             <Avatar className="size-9 cursor-pointer">
    //               <AvatarImage src="/diverse-avatars.png" alt="Jane Doe" />
    //               <AvatarFallback>JD</AvatarFallback>
    //             </Avatar>
    //           </DropdownMenuTrigger>
    //           <DropdownMenuContent align="end" className="w-56">
    //             <DropdownMenuGroup>
    //               <DropdownMenuLabel>
    //                 <div className="flex flex-col gap-0.5">
    //                   <span className="text-sm font-medium">
    //                     {/* {user?.data?.profile?.name || "Name"} */}
    //                     <h1>Name:Nobab</h1>
    //                   </span>
    //                   <span className="text-xs font-normal text-muted-foreground">
    //                     {/* {user?.data?.profile?.email || "Email"} */}
    //                     <h1>email:nobab@gmail.com</h1>
    //                   </span>
    //                 </div>
    //               </DropdownMenuLabel>
    //             </DropdownMenuGroup>
    //             <DropdownMenuSeparator />
    //             <DropdownMenuGroup>
    //               {userMenuItems.map((item) => (
    //                 <DropdownMenuItem key={item.action}>
    //                   <item.icon data-icon="inline-start" />
    //                   {item.label}
    //                   {/* <DropdownMenuShortcut>
    //                     {item.shortcut}
    //                   </DropdownMenuShortcut> */}
    //                 </DropdownMenuItem>
    //               ))}
    //             </DropdownMenuGroup>
    //             <DropdownMenuSeparator />
    //             <DropdownMenuGroup>
    //               <DropdownMenuItem
    //                 variant="destructive"
    //                 onClick={() => console.log("[v0] Sign out clicked")}
    //               >
    //                 <LogOut data-icon="inline-start" />
    //                 Log out
    //               </DropdownMenuItem>
    //             </DropdownMenuGroup>
    //           </DropdownMenuContent>
    //         </DropdownMenu>
    //       ) : (
    //         <Button>
    //           <Link href={"/login"}>Login</Link>
    //         </Button>
    //       )}

    //       {/* Mobile menu (right side) */}
    //       <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
    //         <SheetTrigger
    //           render={
    //             <Button
    //               variant="ghost"
    //               size="icon"
    //               className="md:hidden"
    //               aria-label="Open navigation menu"
    //             />
    //           }
    //         >
    //           <div className="cursor-pointer">
    //             <Menu size={30} className="lg:hidden cursor-pointer" />
    //           </div>
    //         </SheetTrigger>
    //         <SheetContent side="right" className="w-72">
    //           <SheetHeader>
    //             <SheetTitle className="flex items-center gap-2">
    //               <span className="flex size-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
    //                 <LandPlot data-icon="inline-start" />
    //               </span>
    //               RentNest
    //             </SheetTitle>
    //           </SheetHeader>
    //           <nav className="flex flex-col gap-1 px-4">
    //             {navItems.map((item) => (
    //               <Button
    //                 key={item.href}
    //                 variant="ghost"
    //                 className="justify-start"
    //                 nativeButton={false}
    //                 render={<Link href={item.href} />}
    //                 onClick={() => setMobileOpen(false)}
    //               >
    //                 {item.label}
    //               </Button>
    //             ))}
    //           </nav>
    //         </SheetContent>
    //       </Sheet>
    //     </div>
    //   </div>
    // </header>
    <header className="sticky top-0 z-50 w-full border-b border-green-500/10 bg-background/70 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-green-700 text-white shadow-lg shadow-green-500/30 transition duration-300 hover:scale-110">
            <LandPlot className="h-6 w-6" />
          </div>

          <div>
            <h2 className="text-2xl font-extrabold tracking-tight">
              Rent<span className="text-green-600">Nest</span>
            </h2>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-2 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <Button
                variant="ghost"
                className="cursor-pointer rounded-full px-5 text-sm font-semibold transition-all duration-300 hover:bg-green-600 hover:text-white"
              >
                {item.label}
              </Button>
            </Link>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          {/* 
          {user?.success ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="h-11 w-11 cursor-pointer rounded-full p-0"
                >
                  <Avatar className="h-11 w-11 ring-2 ring-green-500 transition duration-300 hover:scale-110">
                    <AvatarImage src="/diverse-avatars.png" />
                    <AvatarFallback>NN</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent
                align="end"
                className="w-64 rounded-2xl border border-green-500/20 bg-background/90 shadow-2xl backdrop-blur-xl"
              >
                <DropdownMenuLabel>
                  <div className="space-y-1">
                    <h3 className="font-semibold">Nobab Sarkar</h3>
                    <p className="text-xs text-muted-foreground">
                      nobab@gmail.com
                    </p>
                  </div>
                </DropdownMenuLabel>

                <DropdownMenuSeparator />

                {userMenuItems.map((item) => (
                  <DropdownMenuItem
                    key={item.action}
                    className="cursor-pointer rounded-lg"
                  >
                    <item.icon className="mr-2 h-4 w-4" />
                    {item.label}
                  </DropdownMenuItem>
                ))}

                <DropdownMenuSeparator />

                <DropdownMenuItem
                  className="cursor-pointer rounded-lg text-red-500 focus:text-red-500"
                  onClick={() => console.log("Logout")}
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link href="/login">
              <Button className="cursor-pointer rounded-full bg-green-600 px-6 hover:bg-green-700">
                Login
              </Button>
            </Link>
          )} */}

          {user?.success ? (
            <DropdownMenu>
              <DropdownMenuTrigger
                render={
                  <Button
                    variant="ghost"
                    className="relative size-9 rounded-full p-0"
                    aria-label="Open user menu"
                  />
                }
              >
                <Avatar className="size-9 cursor-pointer">
                  <AvatarImage src="/diverse-avatars.png" alt="Jane Doe" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuGroup>
                  <DropdownMenuLabel>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-sm font-medium">
                        {/* {user?.data?.profile?.name || "Name"} */}
                        <h1>Name:Nobab</h1>
                      </span>
                      <span className="text-xs font-normal text-muted-foreground">
                        {/* {user?.data?.profile?.email || "Email"} */}
                        <h1>email:nobab@gmail.com</h1>
                      </span>
                    </div>
                  </DropdownMenuLabel>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  {userMenuItems.map((item) => (
                    <DropdownMenuItem
                      className="text-green-700"
                      key={item.action}
                    >
                      {/* <item.icon data-icon="inline-start" /> */}
                      {/* {item.label} */}
                      <Button
                        variant="ghost"
                        className="w-full cursor-pointer justify-start rounded-xl py-6 text-base font-semibold hover:bg-green-600 hover:text-white"
                      >
                        {item.label}
                      </Button>
                      {/* <DropdownMenuShortcut>
                        {item.shortcut}
                      </DropdownMenuShortcut> */}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem
                    variant="destructive"
                    onClick={() => console.log("[v0] Sign out clicked")}
                  >
                    <LogOut data-icon="inline-start" />
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button>
              <Link href={"/login"}>Login</Link>
            </Button>
          )}

          {/* Mobile Menu */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger>
              {/* <Button
                variant="outline"
                size="icon"
                className="h-12 w-12 cursor-pointer rounded-full border-green-500/20 bg-background/60 backdrop-blur hover:bg-green-600 hover:text-white lg:hidden"
              >
                <Menu className="h-8 w-8 " />
              </Button> */}

              <Menu className="h-8 w-8 lg:hidden cursor-pointer" />
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-80 border-l border-green-500/10"
            >
              <SheetHeader>
                <SheetTitle className="mt-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-600 text-white">
                    <LandPlot className="h-5 w-5" />
                  </div>

                  <span className="text-2xl font-bold">
                    Rent<span className="text-green-600">Nest</span>
                  </span>
                </SheetTitle>
              </SheetHeader>

              <nav className="mt-10 flex flex-col gap-3">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                  >
                    <Button
                      variant="ghost"
                      className="w-full cursor-pointer justify-start rounded-xl py-6 text-base font-semibold hover:bg-green-600 hover:text-white"
                    >
                      {item.label}
                    </Button>
                  </Link>
                ))}

                {!user?.success && (
                  <Link href="/login">
                    <Button className="mt-4 w-full cursor-pointer rounded-xl bg-green-600 py-6 text-base hover:bg-green-700">
                      Login
                    </Button>
                  </Link>
                )}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
