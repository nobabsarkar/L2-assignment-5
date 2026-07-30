import {
  Search,
  FileText,
  BadgeCheck,
  CreditCard,
  KeyRound,
} from "lucide-react";

export const steps = [
  {
    id: "01",
    title: "Search Properties",
    description:
      "Browse verified apartments, houses, and studios using smart filters like location, price, and bedrooms.",
    icon: Search,
  },
  {
    id: "02",
    title: "Send Rental Request",
    description:
      "Choose your favorite property and submit a rental request directly to the landlord.",
    icon: FileText,
  },
  {
    id: "03",
    title: "Landlord Approval",
    description:
      "The landlord reviews your request and approves it if the property is available.",
    icon: BadgeCheck,
  },
  {
    id: "04",
    title: "Secure Payment",
    description:
      "Complete your rental payment safely through the integrated online payment system.",
    icon: CreditCard,
  },
  {
    id: "05",
    title: "Move Into Your Home",
    description:
      "Receive confirmation and enjoy your new rental home with confidence.",
    icon: KeyRound,
  },
];
