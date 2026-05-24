import {
  Download,
  FileText,
  Plus,
  Settings,
  Upload,
  UserPlus,
} from "lucide-react";

const actions = [
  { icon: Plus, label: "Nuevo Proyecto" },
  { icon: UserPlus, label: "Añadir Usuario" },
  { icon: FileText, label: "Reporte" },
  { icon: Download, label: "Exportar" },
  { icon: Upload, label: "Importar" },
  { icon: Settings, label: "Ajustes" },
];

export default function QuickActions() {
  return (
    <div className="bg-card border border-border rounded-xl p-6">
      <h3 className="text-base font-semibold text-foreground tracking-tight mb-5">
        Acciones Rápidas
      </h3>
      <div className="grid grid-cols-2 gap-2">
        {actions.map(({ icon: Icon, label }) => (
          <button
            key={label}
            className="group flex items-center gap-2.5 px-3 py-2.5 rounded-md bg-muted/40 border border-border hover:border-primary/40 hover:bg-muted transition-colors text-left"
          >
            <span className="h-7 w-7 rounded-md bg-card border border-border flex items-center justify-center text-muted-foreground group-hover:text-primary transition-colors">
              <Icon size={14} />
            </span>
            <span className="text-sm font-medium text-foreground">{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
