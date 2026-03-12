import { useMemo } from "react"
import { useTools } from "../hooks/useTools"
import { useAnalytics } from "../hooks/useAnalytics"

import MonthlySpendChart from "../components/analytics/MonthlySpendChart"
import DepartmentPieChart from "../components/analytics/DepartmentPieChart"
import TopCostTools from "../components/analytics/TopCostTools"
import BudgetProgress from "../components/analytics/BudgetProgress"

interface AnalyticsPageProps {
  search: string
}

export default function AnalyticsPage({ search }: AnalyticsPageProps) {

  const { tools } = useTools()
  const { analytics } = useAnalytics()

  const filteredTools = useMemo(() => {

    if (!search) return tools

    return tools.filter(tool =>
      tool.name.toLowerCase().includes(search.toLowerCase())
    )

  }, [tools, search])

  return (

    <div className="space-y-8">

      <h1 className="text-2xl font-bold">
        Analytics
      </h1>

      <div className="grid md:grid-cols-2 gap-6">

        <MonthlySpendChart tools={filteredTools} />

        <DepartmentPieChart tools={filteredTools} />

      </div>

      <TopCostTools tools={filteredTools} />

      <BudgetProgress analytics={analytics} />

    </div>

  )
}