import { ISidebarItems } from "@/lib/types";
import { Building2, ClipboardList, Home, House } from "lucide-react";

export const LANDLORD_SIDEBAR_ITEMS: ISidebarItems[] = [
  {
    label: "Dashboard",
    href: "/landlord-dashboard",
    icon: Home,
  },
  {
    label: "Create Property",
    href: "/landlord-dashboard/create-property",
    icon: House,
  },
  {
    label: "My Properties",
    href: "/landlord-dashboard/my-properties",
    icon: Building2,
  },
  {
    label: "Rental Requests",
    href: "/landlord-dashboard/rental-requests",
    icon: ClipboardList,
  },
];
