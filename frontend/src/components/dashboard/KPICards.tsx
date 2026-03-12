import type { Tool } from "../../types/Tool"
import KPICard from "../ui/KPICard"

import {
  DollarSign,
  Wrench,
  Users,
  BarChart3
} from "lucide-react"

interface Props {
  tools: Tool[]
}

export default function KPICards({ tools }: Props) {

  const totalCost = tools.reduce(
    (sum, t) => sum + Number(t.monthly_cost ?? 0),
    0
 )

  const activeTools = tools.filter(
    t => t.status === "active"
  ).length

  const departments = new Set(
    tools.map(t => t.owner_department)
  ).size

  const totalUsers = tools.reduce(
    (sum, t) => sum + Number(t.active_users_count ?? 0),
    0
)

  const costPerUser =
    totalUsers ? totalCost / totalUsers : 0

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat("fr-FR", {
        style: "currency",
        currency: "EUR",
        maximumFractionDigits: 0
    }).format(value)

  return (

    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

      <KPICard
        title="Budget"
        value={formatCurrency(totalCost)}
        icon={DollarSign}
      />

      <KPICard
        title="Active Tools"
        value={`${activeTools}`}
        icon={Wrench}
      />

      <KPICard
        title="Departments"
        value={`${departments}`}
        icon={Users}
      />

      <KPICard
        title="Cost per User"
        value={formatCurrency(costPerUser)}
        icon={BarChart3}
      />

    </div>

  )
}