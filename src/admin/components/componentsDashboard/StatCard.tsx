import { ArrowDownRight, ArrowUpRight, type LucideIcon } from "lucide-react";
import { Area, AreaChart, ResponsiveContainer } from "recharts";

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  changeType: "positive" | "negative";
  icon: LucideIcon;
  spark: number[];
}

const StatCard = ({
  title,
  value,
  change,
  changeType,
  icon: Icon,
  spark,
}: StatCardProps) => {
  const positive = changeType === "positive";
  const data = spark.map((v, i) => ({ i, v }));
  const stroke = positive ? "var(--color-primary)" : "var(--color-destructive)";

  return (
    <div className="relative overflow-hidden bg-card border border-border rounded-xl p-5 hover:border-primary/30 transition-colors">
      <div className="flex items-start justify-between mb-6">
        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            {title}
          </p>
          <p className="mt-2 text-3xl font-semibold text-foreground tracking-tight">
            {value}
          </p>
        </div>
        <div className="h-10 w-10 rounded-lg bg-muted/60 border border-border flex items-center justify-center text-primary">
          <Icon size={18} />
        </div>
      </div>

      <div className="flex items-end justify-between">
        <div
          className={`inline-flex items-center gap-1 text-xs font-medium ${
            positive ? "text-primary" : "text-destructive"
          }`}
        >
          {positive ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
          <span>{change}</span>
        </div>
        <div className="h-10 w-24">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{ top: 4, right: 0, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id={`g-${title}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={stroke} stopOpacity={0.4} />
                  <stop offset="100%" stopColor={stroke} stopOpacity={0} />
                </linearGradient>
              </defs>
              <Area
                type="monotone"
                dataKey="v"
                stroke={stroke}
                strokeWidth={1.75}
                fill={`url(#g-${title})`}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default StatCard;
