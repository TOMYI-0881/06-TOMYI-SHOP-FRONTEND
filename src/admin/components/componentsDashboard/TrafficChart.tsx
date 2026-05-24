import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

const data = [
  { name: "Escritorio", value: 65, color: "var(--color-primary)" },
  { name: "Móvil", value: 28, color: "var(--color-accent)" },
  { name: "Tableta", value: 7, color: "var(--color-chart-3)" },
];

const TrafficChart = () => {
  return (
    <div className="bg-card border border-border rounded-xl p-6">
      <div className="mb-4">
        <h3 className="text-base font-semibold text-foreground tracking-tight">
          Fuentes de Tráfico
        </h3>
        <p className="text-sm text-muted-foreground mt-0.5">
          Distribución por dispositivo este mes
        </p>
      </div>

      <div className="flex items-center gap-6">
        <div className="h-44 w-44 relative shrink-0">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                innerRadius={55}
                outerRadius={80}
                paddingAngle={3}
                dataKey="value"
                stroke="var(--color-card)"
                strokeWidth={2}
              >
                {data.map((entry) => (
                  <Cell key={entry.name} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <p className="text-2xl font-semibold text-foreground tracking-tight">
              100%
            </p>
            <p className="text-xs text-muted-foreground">total</p>
          </div>
        </div>

        <div className="flex-1 space-y-3">
          {data.map((d) => (
            <div key={d.name} className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span
                  className="h-2.5 w-2.5 rounded-sm"
                  style={{ background: d.color }}
                />
                <span className="text-sm text-foreground">{d.name}</span>
              </div>
              <span className="text-sm font-medium text-muted-foreground tabular-nums">
                {d.value}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrafficChart;
