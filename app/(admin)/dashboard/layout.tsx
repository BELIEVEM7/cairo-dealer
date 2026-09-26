import { redirect } from "next/navigation";

import { getSession } from "@/lib/session";

import DashboardSidebar from "@/app/(admin)/dashboard/DashboardSideBar";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isAuthenticated = await getSession();

  if (!isAuthenticated) {
    redirect("/login");
  }

  return (
    <DashboardSidebar>
      {children}
    </DashboardSidebar>
  );
}