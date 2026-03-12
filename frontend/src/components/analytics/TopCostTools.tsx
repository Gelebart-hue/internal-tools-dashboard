import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts"
import type { Tool } from "../../types/Tool"

interface Props {
  tools: Tool[]
}

export default function TopCostTools({ tools }: Props) {

  const data = [...tools]
    .sort((a, b) => b.monthly_cost - a.monthly_cost)
    .slice(0, 5)

  return (

    <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">

      <h3 className="font-semibold mb-4">
        Top Expensive Tools
      </h3>

      <ResponsiveContainer width="100%" height={300}>

        <BarChart data={data}>

          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />

          <Bar dataKey="monthly_cost" fill="#a855f7" />

        </BarChart>

      </ResponsiveContainer>

    </div>

  )
}