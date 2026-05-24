import { useState } from "react";
import {
  Home,
  Users,
  BarChart3,
  Settings,
  FileText,
  ShoppingCart,
  Bell,
  HelpCircle,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";

const items = [
  { icon: Home, label: "Panel", active: true },
  { icon: BarChart3, label: "Analíticas" },
  { icon: Users, label: "Usuarios" },
  { icon: ShoppingCart, label: "Pedidos" },
  { icon: FileText, label: "Reportes" },
  { icon: Bell, label: "Notificaciones" },
  { icon: Settings, label: "Ajustes" },
  { icon: HelpCircle, label: "Ayuda" },
];

interface SidebarProps {
  mobileOpen?: boolean;
  onClose?: () => void;
}

const Sidebar = ({ mobileOpen = false, onClose }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-30 md:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`shrink-0 bg-sidebar border-r border-sidebar-border flex flex-col transition-all duration-300
          fixed md:relative inset-y-0 left-0 z-40
          ${collapsed ? "w-16" : "w-64"}
          ${mobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
      >
        <div className="h-16 px-4 border-b border-sidebar-border flex items-center justify-between">
          {!collapsed && (
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-md bg-primary/15 border border-primary/30 flex items-center justify-center">
                <span className="text-primary font-semibold tracking-tight">
                  A
                </span>
              </div>
              <span className="text-sidebar-foreground font-semibold tracking-tight">
                Atelier
              </span>
            </div>
          )}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCollapsed((c) => !c)}
              className="hidden md:flex p-1.5 rounded-md text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-foreground transition-colors"
              aria-label="Alternar barra lateral"
            >
              {collapsed ? (
                <ChevronRight size={18} />
              ) : (
                <ChevronLeft size={18} />
              )}
            </button>
            <button
              onClick={onClose}
              className="md:hidden p-1.5 rounded-md text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-foreground transition-colors"
              aria-label="Cerrar barra lateral"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        <nav className="flex-1 p-3">
          <ul className="space-y-1">
            {items.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.label}>
                  <a
                    href="#"
                    className={`group relative flex items-center gap-3 px-3 py-2.5 rounded-md text-sm transition-colors ${
                      item.active
                        ? "bg-sidebar-accent text-sidebar-foreground"
                        : "text-muted-foreground hover:bg-sidebar-accent/60 hover:text-sidebar-foreground"
                    }`}
                  >
                    {item.active && (
                      <span className="absolute left-0 top-1.5 bottom-1.5 w-0.5 rounded-r bg-primary" />
                    )}
                    <Icon size={18} className="shrink-0" />
                    {!collapsed && (
                      <span className="font-medium">{item.label}</span>
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {!collapsed && (
          <div className="p-3 border-t border-sidebar-border">
            <div className="flex items-center gap-3 p-2 rounded-md hover:bg-sidebar-accent transition-colors cursor-pointer">
              <div className="h-9 w-9 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-semibold text-sm">
                JD
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-sidebar-foreground truncate">
                  John Doe
                </p>
                <p className="text-xs text-muted-foreground truncate">
                  john@atelier.io
                </p>
              </div>
            </div>
          </div>
        )}
      </aside>
    </>
  );
};

export default Sidebar;
