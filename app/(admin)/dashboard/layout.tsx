
import { redirect } from "next/navigation";

import { getCurrentUser } from "@/lib/session";
import DashboardSidebar from "@/app/(admin)/dashboard/DashboardSideBar";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/login");
  }

  if (user.role !== "Admin") {
    redirect("/");
  }

  return (
    <DashboardSidebar>
      {children}
    </DashboardSidebar>
  );
}
