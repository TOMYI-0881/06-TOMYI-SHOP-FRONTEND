import { Bell, FileText, ShoppingCart, User } from "lucide-react";

const activities = [
  {
    icon: User,
    title: "Nuevo usuario registrado",
    description: "Sarah Johnson se unió a la plataforma",
    time: "hace 2 minutos",
  },
  {
    icon: ShoppingCart,
    title: "Nuevo pedido recibido",
    description: "Pedido #12847 — $299.99",
    time: "hace 5 minutos",
  },
  {
    icon: FileText,
    title: "Reporte generado",
    description: "El reporte mensual de ventas está listo",
    time: "hace 15 minutos",
  },
  {
    icon: Bell,
    title: "Notificación del sistema",
    description: "Mantenimiento del servidor programado",
    time: "hace 1 hora",
  },
];

export const ActivityFeed = () => {
  return (
    <div className="bg-card border border-border rounded-xl p-6">
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-base font-semibold text-foreground tracking-tight">
          Actividad Reciente
        </h3>
        <button className="text-xs text-muted-foreground hover:text-primary transition-colors">
          Ver todo
        </button>
      </div>
      <ol className="relative space-y-5">
        <span className="absolute left-[15px] top-2 bottom-2 w-px bg-border" />
        {activities.map((a, idx) => {
          const Icon = a.icon;
          return (
            <li key={idx} className="relative flex gap-4">
              <div className="relative z-10 h-8 w-8 shrink-0 rounded-full bg-muted border border-border flex items-center justify-center text-primary">
                <Icon size={14} />
              </div>
              <div className="min-w-0 flex-1 pt-0.5">
                <p className="text-sm font-medium text-foreground">{a.title}</p>
                <p className="text-sm text-muted-foreground">{a.description}</p>
                <p className="text-xs text-muted-foreground/70 mt-1">
                  {a.time}
                </p>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
};
