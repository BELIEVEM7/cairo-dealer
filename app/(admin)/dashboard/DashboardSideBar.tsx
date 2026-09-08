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
} from "@/components/ui/sidebar";

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
      </Sidebar>

      <SidebarInset>
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}