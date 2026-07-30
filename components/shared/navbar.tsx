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
      name: "nobab",
    },
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-2 px-4 sm:gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="flex size-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <LandPlot data-icon="inline-start" />
          </span>
          <span className="text-lg font-semibold tracking-tight">RentNest</span>
        </Link>

        {/* Nav links (tablet and up) */}
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            // <Button
            //   key={item.href}
            //   variant="ghost"
            //   size="sm"
            //   nativeButton={false}
            //   render={<Link href={item.href} />}
            // >
            //   {item.label}
            // </Button>
            <Link className="cursor-pointer" key={item.href} href={item.href}>
              <Button variant="ghost" size="sm">
                {item.label}
              </Button>
            </Link>
          ))}
        </nav>

        {/* Right side: theme toggle + user dropdown + mobile menu */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
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
                    <DropdownMenuItem key={item.action}>
                      <item.icon data-icon="inline-start" />
                      {item.label}
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

          {/* Mobile menu (right side) */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden"
                  aria-label="Open navigation menu"
                />
              }
            >
              <Menu className="lg:hidden cursor-pointer" />
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetHeader>
                <SheetTitle className="flex items-center gap-2">
                  <span className="flex size-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
                    <LandPlot data-icon="inline-start" />
                  </span>
                  RentNest
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 px-4">
                {navItems.map((item) => (
                  <Button
                    key={item.href}
                    variant="ghost"
                    className="justify-start"
                    nativeButton={false}
                    render={<Link href={item.href} />}
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Button>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
