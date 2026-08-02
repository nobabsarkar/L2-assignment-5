// const TenantDashboardLayout = ({ children }: { children: React.ReactNode }) => {
//   return <div>{children}</div>;
// };

import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import DashboardSidebar from "../_components/tenant-dashboard/DashboardSidebar";

// export default TenantDashboardLayout;

// import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
// import DashboardSidebar from "@/components/dashboard/DashboardSidebar";

const TenantDashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <DashboardSidebar />

      <SidebarInset>
        {/* Header */}
        <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b bg-background/80 px-4 backdrop-blur md:px-6">
          <div className="flex items-center gap-3">
            <SidebarTrigger />

            <div>
              <h1 className="text-xl font-bold">Tenant Dashboard</h1>
              <p className="text-xs text-muted-foreground">Welcome back 👋</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* Notification */}
            <button className="rounded-full border p-2 transition hover:bg-muted">
              🔔
            </button>

            {/* Avatar */}
            <img
              src="https://ui-avatars.com/api/?name=Tenant"
              alt="avatar"
              className="h-10 w-10 rounded-full border"
            />
          </div>
        </header>

        {/* Page */}
        <main className="min-h-[calc(100vh-64px)] bg-muted/30 p-4 md:p-6 lg:p-8">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default TenantDashboardLayout;
