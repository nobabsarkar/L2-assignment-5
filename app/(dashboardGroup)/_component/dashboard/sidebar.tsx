/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ISidebarItems, NavbarProps } from "@/lib/types";
import { sidebarMenuItems } from "../../_config/adminSidebarItems";

// const tenantMenus = [
//   {
//     title: "Dashboard",
//     href: "/tenant-dashboard",
//     icon: Home,
//   },
//   {
//     title: "My Requests",
//     href: "/tenant-dashboard/my-requests",
//     icon: ClipboardList,
//   },
//   {
//     title: "Payment History",
//     href: "/tenant-dashboard/payment-history",
//     icon: CreditCard,
//   },
// ];

export default function Sidebar({ user }: NavbarProps) {
  let navItems: ISidebarItems[] = [];

  if (user?.data?.role === "ADMIN") {
    navItems = sidebarMenuItems?.ADMIN;
  } else if (user?.data?.role === "TENANT") {
    navItems = sidebarMenuItems?.TENANT;
  } else if (user?.data?.role === "LANDLORD") {
    navItems = sidebarMenuItems?.LANDLORD;
  }

  return (
    <>
      {/* Desktop */}
      <aside className="hidden w-64 border-r p-4 md:block">
        <MenuItems navItems={navItems} />
      </aside>

      {/* Mobile */}
      <div className="border-b p-4 md:hidden">
        <Sheet>
          <SheetTrigger>
            <Menu className="cursor-pointer" />
          </SheetTrigger>

          <SheetContent
            side="left"
            className="w-64 p-4 [&_[data-slot='sheet-close']]:hidden"
          >
            <MenuItems navItems={navItems} />
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}

function MenuItems({ navItems }: { navItems: any }) {
  const pathname = usePathname();

  return (
    <div className="space-y-2">
      {navItems?.map((item: any) => {
        const Icon = item.icon;

        const active = pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={` flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-all duration-200 ${
              active
                ? "bg-green-600 text-white shadow-md"
                : "text-slate-700 hover:bg-emerald-50 hover:text-emerald-700"
            }`}
          >
            <Icon className="h-5 w-5" />

            <span>{item.label}</span>
          </Link>
        );
      })}
    </div>
  );
}
