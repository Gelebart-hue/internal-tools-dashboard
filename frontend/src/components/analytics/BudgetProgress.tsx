import type { Analytics } from "../../types/Analytics"

interface Props {
  analytics: Analytics | null
}

export default function BudgetProgress({ analytics }: Props) {

  if (!analytics) return null

  const percent = parseFloat(
    analytics.budget_overview.budget_utilization
  )

  return (

    <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">

      <h3 className="font-semibold mb-4">
        Budget Progress
      </h3>

      <div className="w-full bg-gray-800 rounded-full h-3">

        <div
          style={{ width: `${percent}%` }}
          className="bg-purple-500 h-3 rounded-full"
        />

      </div>

      <p className="text-sm text-gray-400 mt-2">
        {percent}% of monthly budget used
      </p>

    </div>

  )
}