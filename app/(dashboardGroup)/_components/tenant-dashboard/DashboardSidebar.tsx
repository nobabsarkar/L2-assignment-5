"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Building2,
  ClipboardList,
  CreditCard,
  Home,
  LandPlot,
  LogOut,
  Star,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const items = [
  {
    title: "Dashboard",
    href: "/tenant-dashboard",
    icon: Home,
  },
  {
    title: "Rental Requests",
    href: "/tenant-dashboard/requests",
    icon: ClipboardList,
  },
  {
    title: "Payments",
    href: "/tenant-dashboard/payments",
    icon: CreditCard,
  },
  {
    title: "Reviews",
    href: "/tenant-dashboard/reviews",
    icon: Star,
  },
  {
    title: "Saved Properties",
    href: "/tenant-dashboard/properties",
    icon: Building2,
  },
];

export default function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar className="border-r bg-white dark:bg-zinc-950">
      {/* Header */}
      <SidebarHeader className="border-b px-5 py-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-emerald-700 text-white shadow-lg">
            <LandPlot className="h-6 w-6" />
          </div>

          <div>
            <h2 className="text-xl font-bold">
              Rent<span className="text-green-600">Nest</span>
            </h2>

            <p className="text-xs text-muted-foreground">Tenant Dashboard</p>
          </div>
        </Link>
      </SidebarHeader>

      {/* Menu */}
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="gap-2 px-3 py-4">
              {items.map((item) => {
                const active =
                  pathname === item.href ||
                  pathname.startsWith(item.href + "/");

                return (
                  <SidebarMenuItem key={item.href}>
                    <SidebarMenuButton
                      isActive={active}
                      className={`h-12 rounded-xl transition-all duration-300 ${
                        active
                          ? "bg-green-600 text-white shadow-lg hover:bg-green-700 hover:text-white"
                          : "hover:bg-green-50 hover:text-green-700 dark:hover:bg-green-900/20"
                      }`}
                    >
                      <Link
                        href={item.href}
                        className="flex items-center gap-3"
                      >
                        <item.icon className="h-5 w-5" />

                        <span className="font-medium">{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
