import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { title } from "process";

// Menu items for "Kategori" and "Golongan".
const items = [
  {
    title: "Kategori",
    url: "/kategori", // Adjust this URL to your kategori page route
  },
  {
    title: "Golongan",
    url: "/golongan", // Adjust this URL to your golongan page route
  },
  {
    title:"Gedung",
    url:"/gedung",
  },
  {
    title:"Ruangan",
    url:"/ruangan",
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
