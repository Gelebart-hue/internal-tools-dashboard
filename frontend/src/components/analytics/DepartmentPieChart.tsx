import {
  PieChart,
  Pie,
  Tooltip,
  ResponsiveContainer
} from "recharts"
import type { Tool } from "../../types/Tool"

interface Props {
  tools: Tool[]
}

export default function DepartmentPieChart({ tools }: Props) {

  const costsByDepartment: Record<string, number> = {}

  tools.forEach(tool => {
    costsByDepartment[tool.owner_department] =
      (costsByDepartment[tool.owner_department] || 0) +
      tool.monthly_cost
  })

  const data = Object.entries(costsByDepartment).map(
    ([name, value]) => ({ name, value })
  )

  return (

    <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">

      <h3 className="font-semibold mb-4">
        Department Cost Breakdown
      </h3>

      <ResponsiveContainer width="100%" height={300}>

        <PieChart>

          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            outerRadius={100}
          />

          <Tooltip />

        </PieChart>

      </ResponsiveContainer>

    </div>

  )
}