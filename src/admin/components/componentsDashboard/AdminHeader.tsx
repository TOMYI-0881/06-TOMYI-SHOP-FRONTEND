import { Search, Bell, MessageSquare, Settings, Menu } from "lucide-react";

interface HeaderProps {
  onMenuClick?: () => void;
}

export const AdminHeader = ({ onMenuClick }: HeaderProps) => {
  return (
    <header className="h-16 px-4 md:px-6 border-b border-border bg-card flex items-center justify-between sticky top-0 z-20">
      <div className="flex items-center gap-3 flex-1">
        <button
          onClick={onMenuClick}
          className="md:hidden p-2 -ml-2 rounded-md text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
          aria-label="Abrir menú"
        >
          <Menu size={20} />
        </button>
        <div className="relative flex-1 max-w-md">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
            size={16}
          />
          <input
            type="text"
            placeholder="Buscar cualquier cosa..."
            className="w-full pl-9 pr-4 py-2 text-sm bg-muted/60 border border-border rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/40 focus:border-ring transition-all"
          />
        </div>
      </div>

      <div className="flex items-center gap-1">
        {[Bell, MessageSquare, Settings].map((Icon, i) => (
          <button
            key={i}
            className="relative p-2 text-muted-foreground hover:bg-muted hover:text-foreground rounded-md transition-colors"
          >
            <Icon size={18} />
            {i === 0 && (
              <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-accent rounded-full" />
            )}
          </button>
        ))}
        <div className="ml-3 h-9 w-9 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-semibold text-sm cursor-pointer">
          JD
        </div>
      </div>
    </header>
  );
};
