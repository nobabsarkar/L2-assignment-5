import { ISidebarItems } from "@/lib/types";
import { ClipboardList, CreditCard, Home } from "lucide-react";

export const TENANT_SIDEBAR_ITEMS: ISidebarItems[] = [
  {
    label: "Dashboard",
    href: "/tenant-dashboard",
    icon: Home,
  },
  {
    label: "My Requests",
    href: "/tenant-dashboard/my-requests",
    icon: ClipboardList,
  },
  {
    label: "Payment History",
    href: "/tenant-dashboard/payment-history",
    icon: CreditCard,
  },
];
