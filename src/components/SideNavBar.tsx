import { Link } from "react-router-dom";
import { Home, Search, X } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage} from "./ui/avatar";
import {  
  Sidebar
  , SidebarContent
  , SidebarFooter
  , SidebarGroup
  , SidebarGroupContent
  , SidebarGroupLabel
  , SidebarHeader
  , SidebarMenu
  , SidebarMenuButton
  , SidebarMenuItem
  , useSidebar
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

export default function SideNavBar() {
  const { toggleSidebar } = useSidebar();
  const handleXBtnClick = () => toggleSidebar();

  return (
      <Sidebar variant="floating" className={cn("bg-[oklch(var(--sidebar))], className")}>
        <SidebarHeader>
          <Link to={"/"} className="flex justify-between">
            <span>
              <Avatar>
                <AvatarImage  src="/public/vite.svg" />
                <AvatarFallback> Profile </AvatarFallback>
              </Avatar>
            </span>
            <span>
                <X onClick={handleXBtnClick}/>
            </span>
          </Link>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel> SIDE BAR </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {[{title:"Home", content:"/",url:"https://www.naver.com", icon: Home}].map(item => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link to={item.title}>
                          <item.icon />
                          <span>{item.title}</span>
                      </Link>
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
