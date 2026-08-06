import { FolderKanban, Home, Users } from "lucide-react";

import { ISidebarItems } from "@/lib/types";
import { TENANT_SIDEBAR_ITEMS } from "./tenantSidebarItems";
import { LANDLORD_SIDEBAR_ITEMS } from "./landlordSidebarItems";

const ADMIN_SIDEBAR_ITEMS: ISidebarItems[] = [
  {
    label: "Dashboard",
    href: "/admin-dashboard",
    icon: Home,
  },
  {
    label: "Manage Users",
    href: "/admin-dashboard/manage-users",
    icon: Users,
  },
  {
    label: "Categories",
    href: "/admin-dashboard/categories",
    icon: FolderKanban,
  },
];

export const sidebarMenuItems = {
  ADMIN: ADMIN_SIDEBAR_ITEMS,
  TENANT: TENANT_SIDEBAR_ITEMS,
  LANDLORD: LANDLORD_SIDEBAR_ITEMS,
};
