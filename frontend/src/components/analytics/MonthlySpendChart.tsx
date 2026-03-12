import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts"
import type { Tool } from "../../types/Tool"

interface Props {
  tools: Tool[]
}

export default function MonthlySpendChart({ tools }: Props) {

  const data = tools.map(tool => ({
    name: tool.name,
    cost: tool.monthly_cost
  }))

  return (

    <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">

      <h3 className="font-semibold mb-4">
        Monthly Spend Evolution
      </h3>

      <ResponsiveContainer width="100%" height={300}>

        <LineChart data={data}>

          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />

          <Line
            type="monotone"
            dataKey="cost"
            stroke="#a855f7"
            strokeWidth={2}
          />

        </LineChart>

      </ResponsiveContainer>

    </div>

  )
}