import { ChevronRight, Home, BookOpen } from "lucide-react";
import { NavLink } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  useSidebar,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
} from "@/components/ui/sidebar";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { sections } from "@/data/chapters";

export function AppSidebar() {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

  return (
    <Sidebar className="border-r">
      <SidebarHeader className="border-b px-6 py-4">
        <NavLink to="/" className="flex items-center gap-2">
          <Home className="h-5 w-5 text-primary" />
          {!isCollapsed && (
            <span className="font-semibold text-lg">Lovable 中文社区</span>
          )}
        </NavLink>
      </SidebarHeader>

      <SidebarContent>
        {sections.map((section, index) => (
          <Collapsible key={index} defaultOpen className="group/collapsible">
            <SidebarGroup>
              <CollapsibleTrigger asChild>
                <SidebarGroupLabel className="cursor-pointer hover:bg-accent">
                  <BookOpen className="h-4 w-4 mr-2" />
                  {section.title}
                  <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
                </SidebarGroupLabel>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuSub>
                      {section.chapters.map((chapter) => (
                        <SidebarMenuSubItem key={chapter.id}>
                          <SidebarMenuSubButton asChild>
                            <NavLink
                              to={`/docs/${chapter.id}`}
                              className={({ isActive }) =>
                                isActive
                                  ? "bg-accent text-accent-foreground font-medium"
                                  : ""
                              }
                            >
                              {chapter.title}
                            </NavLink>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </SidebarMenu>
                </SidebarGroupContent>
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>
        ))}
      </SidebarContent>
    </Sidebar>
  );
}
