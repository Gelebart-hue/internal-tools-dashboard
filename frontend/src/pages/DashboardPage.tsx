import { useMemo } from "react"
import { useTools } from "../hooks/useTools"
import RecentToolsTable from "../components/dashboard/RecentToolsTable"
import KPICards from "../components/dashboard/KPICards"

interface DashboardPageProps {
  search: string
}

export default function DashboardPage({ search }: DashboardPageProps) {

  const { tools, loading } = useTools()

  const filteredTools = useMemo(() => {

    if (!search) return tools

    return tools.filter((tool) =>
      tool.name.toLowerCase().includes(search.toLowerCase())
    )

  }, [tools, search])

  return (

    <div className="space-y-6">

      <div>

        <h1 className="text-2xl font-bold text-white">
          Dashboard
        </h1>

        <p className="text-gray-400 text-sm">
          Overview of your internal tools
        </p>

      </div>

      <KPICards tools={tools} />

      <RecentToolsTable
        tools={filteredTools}
        loading={loading}
      />

    </div>

  )
}