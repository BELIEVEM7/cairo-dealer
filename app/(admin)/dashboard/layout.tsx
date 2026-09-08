import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import DashboardSidebar from "@/app/(admin)/dashboard/DashboardSideBar";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();

  const session = cookieStore.get("session");

  if (!session) {
    redirect("/login");
  }

  return (
    <DashboardSidebar>
      {children}
    </DashboardSidebar>
  );
}