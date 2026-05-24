import {
  BarChart3,
  DollarSign,
  Eye,
  ShoppingCart,
  TrendingUp,
  Users,
} from "lucide-react";

import StatCard from "@/admin/components/componentsDashboard/StatCard";
import RevenueChart from "@/admin/components/componentsDashboard/RevenueChart";
import TrafficChart from "@/admin/components/componentsDashboard/TrafficChart";

import QuickActions from "@/admin/components/componentsDashboard/QuickActions";
import { ActivityFeed } from "@/admin/components/componentsDashboard/ActivityFeed";

const stats = [
  {
    title: "Usuarios Totales",
    value: "24,567",
    change: "+12.5% respecto al mes pasado",
    changeType: "positive" as const,
    icon: Users,
    spark: [10, 14, 12, 18, 16, 22, 26, 24, 30, 34],
  },
  {
    title: "Ingresos",
    value: "$84,230",
    change: "+8.2% respecto al mes pasado",
    changeType: "positive" as const,
    icon: DollarSign,
    spark: [20, 22, 19, 26, 28, 25, 32, 30, 38, 42],
  },
  {
    title: "Pedidos",
    value: "1,429",
    change: "-2.4% respecto al mes pasado",
    changeType: "negative" as const,
    icon: ShoppingCart,
    spark: [30, 28, 32, 26, 24, 27, 22, 25, 20, 18],
  },
  {
    title: "Tasa de Conversión",
    value: "3.24%",
    change: "+0.3% respecto al mes pasado",
    changeType: "positive" as const,
    icon: TrendingUp,
    spark: [8, 10, 12, 11, 14, 13, 16, 15, 18, 20],
  },
];

const topPages = [
  { page: "/dashboard", views: 2847, change: "+12%" },
  { page: "/products", views: 1923, change: "+8%" },
  { page: "/analytics", views: 1456, change: "+15%" },
  { page: "/settings", views: 987, change: "-3%" },
];

const systems = [
  {
    service: "Servidor API",
    status: "En línea",
    uptime: "99.9%",
    tone: "primary",
  },
  {
    service: "Base de datos",
    status: "En línea",
    uptime: "99.8%",
    tone: "primary",
  },
  {
    service: "Servidor de caché",
    status: "Advertencia",
    uptime: "98.2%",
    tone: "accent",
  },
  { service: "CDN", status: "En línea", uptime: "99.9%", tone: "primary" },
] as const;

export const DashboardPage = () => {
  return (
    <main className="flex-1 p-4 md:p-8 space-y-6 md:space-y-8">
      <div>
        <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
          Resumen
        </p>
        <h1 className="mt-2 text-2xl md:text-3xl font-semibold tracking-tight text-foreground">
          Bienvenido de nuevo, Thomas!
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Aquí tienes una vista refinada de lo que está pasando con tu negocio
          hoy.
        </p>
      </div>

      <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-5">
        {stats.map((s) => (
          <StatCard key={s.title} {...s} />
        ))}
      </section>

      <section className="grid grid-cols-1 xl:grid-cols-3 gap-4 md:gap-5">
        <div className="xl:col-span-2 space-y-4 md:space-y-5">
          <RevenueChart />
          <TrafficChart />
        </div>
        <div className="space-y-4 md:space-y-5">
          <ActivityFeed />
          <QuickActions />
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-5">
        <div className="bg-card border border-border rounded-xl p-4 md:p-6">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h3 className="text-base font-semibold text-foreground tracking-tight">
                Páginas Principales
              </h3>
              <p className="text-sm text-muted-foreground mt-0.5">
                Rutas más visitadas esta semana
              </p>
            </div>
            <Eye size={18} className="text-muted-foreground" />
          </div>
          <div className="divide-y divide-border">
            {topPages.map((item) => {
              const up = item.change.startsWith("+");
              return (
                <div
                  key={item.page}
                  className="flex items-center justify-between py-3 first:pt-0 last:pb-0"
                >
                  <div>
                    <p className="font-medium text-foreground text-sm">
                      {item.page}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {item.views.toLocaleString()} vistas
                    </p>
                  </div>
                  <span
                    className={`text-xs font-medium tabular-nums ${
                      up ? "text-primary" : "text-destructive"
                    }`}
                  >
                    {item.change}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-card border border-border rounded-xl p-4 md:p-6">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h3 className="text-base font-semibold text-foreground tracking-tight">
                Estado del Sistema
              </h3>
              <p className="text-sm text-muted-foreground mt-0.5">
                Salud de la infraestructura en tiempo real
              </p>
            </div>
            <BarChart3 size={18} className="text-muted-foreground" />
          </div>
          <div className="divide-y divide-border">
            {systems.map((item) => (
              <div
                key={item.service}
                className="flex items-center justify-between py-3 first:pt-0 last:pb-0"
              >
                <div className="flex items-center gap-3">
                  <span className="relative flex h-2.5 w-2.5">
                    <span
                      className={`absolute inline-flex h-full w-full rounded-full opacity-60 animate-ping ${
                        item.tone === "primary" ? "bg-primary" : "bg-accent"
                      }`}
                    />
                    <span
                      className={`relative inline-flex h-2.5 w-2.5 rounded-full ${
                        item.tone === "primary" ? "bg-primary" : "bg-accent"
                      }`}
                    />
                  </span>
                  <div>
                    <p className="font-medium text-foreground text-sm">
                      {item.service}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {item.status}
                    </p>
                  </div>
                </div>
                <span className="text-sm font-medium text-foreground tabular-nums">
                  {item.uptime}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};
