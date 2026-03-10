
import KPICard from "../components/ui/KPICard"
import RecentToolsTable from "../components/tools/RecentToolsTable"
import { useTools } from "../hooks/useTools"
import { useAnalytics } from "../hooks/useAnalytics"
import { Wallet, Wrench, Users, DollarSign } from "lucide-react"

export default function DashboardPage() {

  const { tools, loading } = useTools()
  const { analytics } = useAnalytics()

  return (

    <div className="min-h-screen bg-gray-950 text-white">

      <div className="p-8 space-y-8">

        {/* KPI GRID */}

        <div className="grid md:grid-cols-4 gap-6">

        <KPICard
          title="Budget"
          value={`€${analytics?.budget_overview.current_month_total ?? "-"}`}
          icon={Wallet}
        />

        <KPICard
          title="Active Tools"
          value={`${analytics?.cost_analytics.active_users ?? "-"}`}
          icon={Wrench}
        />

        <KPICard
          title="Departments"
          value="8"
          icon={Users}
        />

        <KPICard
          title="Cost per User"
          value={`€${analytics?.cost_analytics.cost_per_user ?? "-"}`}
          icon={DollarSign}
        />

      </div>

        {/* RECENT TOOLS */}

        <div>

          <h2 className="text-xl font-bold mb-4">
            Recent Tools
          </h2>

          {loading
            ? <p className="text-gray-400">Loading...</p>
            : <RecentToolsTable tools={tools} />
          }

        </div>

      </div>

    </div>

  )
}