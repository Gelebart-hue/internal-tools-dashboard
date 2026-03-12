import type { Tool } from "../../types/Tool"
import StatusBadge from "../ui/StatusBadge"

interface Props {
  tool: Tool | null
  onClose: () => void
}

export default function ToolDetailsModal({ tool, onClose }: Props) {

  if (!tool) return null

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat("fr-FR", {
      style: "currency",
      currency: "EUR",
      maximumFractionDigits: 0
    }).format(value)

  return (

    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">

      <div className="bg-gray-900 rounded-xl p-6 max-w-xl w-full space-y-5">

        {/* Header */}

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-3">

            <img
              src={`/logos/${tool.name
                .toLowerCase()
                .replace(/\s/g, "")
                .replace(/-/g, "")}.svg`}
              alt={tool.name}
              className="w-8 h-8 object-contain"
            />

            <h2 className="text-xl font-semibold text-white">
              {tool.name}
            </h2>

          </div>

          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white"
          >
            ✕
          </button>

        </div>

        {/* Description */}

        <p className="text-gray-400 text-sm">
          {tool.description}
        </p>

        {/* Details */}

        <div className="grid grid-cols-2 gap-4 text-sm">

          <div>
            <p className="text-gray-500">Category</p>
            <p className="text-white">{tool.category}</p>
          </div>

          <div>
            <p className="text-gray-500">Department</p>
            <p className="text-white">{tool.owner_department}</p>
          </div>

          <div>
            <p className="text-gray-500">Vendor</p>
            <p className="text-white">{tool.vendor}</p>
          </div>

          <div>
            <p className="text-gray-500">Users</p>
            <p className="text-white">{tool.active_users_count}</p>
          </div>

          <div>
            <p className="text-gray-500">Monthly Cost</p>
            <p className="text-white">
              {formatCurrency(tool.monthly_cost)}
            </p>
          </div>

          <div>
            <p className="text-gray-500">Previous Month</p>
            <p className="text-white">
              {formatCurrency(tool.previous_month_cost)}
            </p>
          </div>

          <div>
            <p className="text-gray-500">Status</p>
            <StatusBadge status={tool.status} />
          </div>

          <div>
            <p className="text-gray-500">Last Update</p>
            <p className="text-white text-xs">
              {tool.updated_at}
            </p>
          </div>

        </div>

        {/* Website */}

        {tool.website_url && (
          <div>

            <p className="text-gray-500 text-sm mb-1">
              Website
            </p>

            <a
              href={tool.website_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:underline text-sm"
            >
              {tool.website_url}
            </a>

          </div>
        )}

        {/* Footer */}

        <div className="flex justify-end pt-2">

          <button
            onClick={onClose}
            className="bg-purple-600 px-4 py-2 rounded-lg hover:bg-purple-700"
          >
            Close
          </button>

        </div>

      </div>

    </div>
  )
}