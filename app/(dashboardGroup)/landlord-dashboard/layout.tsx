import { getMe } from "@/service/getMe";
import Sidebar from "../_component/dashboard/sidebar";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getMe();

  return (
    <div className="flex min-h-screen">
      <Sidebar user={user} />

      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
