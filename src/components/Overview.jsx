import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

const data = [
  {
    name: "Jan",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Feb",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Mar",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Apr",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "May",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Jun",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Jul",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Aug",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Sep",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Oct",
    total: Math.floor(Math.random() * 5000) + 1000 ,
  },
  {
    name: "Nov",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Dec",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
];

export function Overview() {
  return (
    <ResponsiveContainer width={"100%"} height={438} className="border border-slate-200 rounded-xl shadow-md">
      <h3 className="font-semibold p-6">Overview</h3>
      <BarChart data={data} className="w-[826px] lg:w-full max-h-[350px] -left-[40px] lg:left-0 -bottom-2 ">
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          className="color-slate-600 font-semibold"
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value}`}
          className="tracking-wide color-slate-600 font-semibold"
        />

        <Bar
          dataKey="total"
          fill="currentColor"
          radius={[4, 4, 0, 0]}
          maxBarSize={50}
          className=" sm:text-black text-green-100 -left-10 overflow-hidden"
        />
      </BarChart>
    </ResponsiveContainer>
  );
}