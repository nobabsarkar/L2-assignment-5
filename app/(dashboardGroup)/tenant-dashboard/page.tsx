import { Building2, ClipboardList, CreditCard, Star } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const stats = [
  {
    title: "Rental Requests",
    value: "12",
    icon: ClipboardList,
  },
  {
    title: "Payments",
    value: "08",
    icon: CreditCard,
  },
  {
    title: "Reviews",
    value: "05",
    icon: Star,
  },
  {
    title: "Saved Properties",
    value: "18",
    icon: Building2,
  },
];

const TenantDashboard = () => {
  return (
    <div className="space-y-8">
      {/* Heading */}

      <div>
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>

        <p className="text-muted-foreground">
          Overview of your rental activities.
        </p>
      </div>

      {/* Cards */}

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => (
          <Card
            key={item.title}
            className="transition-all hover:-translate-y-1 hover:shadow-lg"
          >
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-sm">{item.title}</CardTitle>

              <item.icon className="h-5 w-5 text-green-600" />
            </CardHeader>

            <CardContent>
              <h2 className="text-4xl font-bold">{item.value}</h2>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Activity */}

      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="rounded-xl border p-4">Rental request submitted.</div>

          <div className="rounded-xl border p-4">
            Payment completed successfully.
          </div>

          <div className="rounded-xl border p-4">Review added.</div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TenantDashboard;
