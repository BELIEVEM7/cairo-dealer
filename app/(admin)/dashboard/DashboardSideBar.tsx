"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
  SidebarFooter,
} from "@/components/ui/sidebar";

import { logoutAction } from "@/app/(admin)/dashboard/logout/action";
import { Button } from "@/components/ui/button";

export default function DashboardSidebar({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel
              render={
                <Link href="/">
                  Cairo Motors
                </Link>
              }
            />

            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    isActive={pathname === "/dashboard"}
                    render={
                      <Link href="/dashboard">
                        Dashboard
                      </Link>
                    }
                  />
                </SidebarMenuItem>

                <SidebarMenuItem>
                  <SidebarMenuButton
                    isActive={pathname.startsWith("/dashboard/cars")}
                    render={
                      <Link href="/dashboard/cars">
                        Cars
                      </Link>
                    }
                  />
                </SidebarMenuItem>

                <SidebarMenuItem>
                  <SidebarMenuButton
                    isActive={pathname.startsWith("/dashboard/customers")}
                    render={
                      <Link href="/dashboard/customers">
                        Customers
                      </Link>
                    }
                  />
                </SidebarMenuItem>

                <SidebarMenuItem>
                  <SidebarMenuButton
                    isActive={pathname.startsWith("/dashboard/settings")}
                    render={
                      <Link href="/dashboard/settings">
                        Settings
                      </Link>
                    }
                  />
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <form action={logoutAction}>
            <Button
              type="submit"
              variant="outline"
              className="w-full"
            >
              Logout
            </Button>
          </form>
        </SidebarFooter>
      </Sidebar>

      <SidebarInset>
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}