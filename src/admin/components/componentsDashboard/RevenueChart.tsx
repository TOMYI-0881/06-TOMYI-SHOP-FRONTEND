import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { m: "Ene", revenue: 12400, orders: 8200 },
  { m: "Feb", revenue: 15800, orders: 9100 },
  { m: "Mar", revenue: 14200, orders: 9600 },
  { m: "Abr", revenue: 18900, orders: 11200 },
  { m: "May", revenue: 22100, orders: 12800 },
  { m: "Jun", revenue: 19800, orders: 13400 },
  { m: "Jul", revenue: 24600, orders: 15100 },
  { m: "Ago", revenue: 27300, orders: 16900 },
  { m: "Sep", revenue: 25400, orders: 17400 },
  { m: "Oct", revenue: 29800, orders: 19200 },
  { m: "Nov", revenue: 31200, orders: 20400 },
  { m: "Dic", revenue: 34800, orders: 22100 },
];

const RevenueChart = () => {
  return (
    <div className="bg-card border border-border rounded-xl p-6">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h3 className="text-base font-semibold text-foreground tracking-tight">
            Resumen de Ingresos
          </h3>
          <p className="text-sm text-muted-foreground mt-0.5">
            Rendimiento mensual a lo largo del año
          </p>
        </div>
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-primary" /> Ingresos
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-accent" /> Pedidos
          </span>
        </div>
      </div>

      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 8, right: 8, left: -16, bottom: 0 }}
          >
            <defs>
              <linearGradient id="grad-rev" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="0%"
                  stopColor="var(--color-primary)"
                  stopOpacity={0.35}
                />
                <stop
                  offset="100%"
                  stopColor="var(--color-primary)"
                  stopOpacity={0}
                />
              </linearGradient>
              <linearGradient id="grad-ord" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="0%"
                  stopColor="var(--color-accent)"
                  stopOpacity={0.25}
                />
                <stop
                  offset="100%"
                  stopColor="var(--color-accent)"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>
            <CartesianGrid
              vertical={false}
              stroke="var(--color-border)"
              strokeDasharray="3 6"
            />
            <XAxis
              dataKey="m"
              stroke="var(--color-muted-foreground)"
              fontSize={11}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="var(--color-muted-foreground)"
              fontSize={11}
              tickLine={false}
              axisLine={false}
              tickFormatter={(v) => `${v / 1000}k`}
            />
            <Tooltip
              cursor={{ stroke: "var(--color-border)", strokeWidth: 1 }}
              contentStyle={{
                background: "var(--color-popover)",
                border: "1px solid var(--color-border)",
                borderRadius: 8,
                fontSize: 12,
                color: "var(--color-popover-foreground)",
              }}
            />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="var(--color-primary)"
              strokeWidth={2}
              fill="url(#grad-rev)"
            />
            <Area
              type="monotone"
              dataKey="orders"
              stroke="var(--color-accent)"
              strokeWidth={2}
              fill="url(#grad-ord)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RevenueChart;
