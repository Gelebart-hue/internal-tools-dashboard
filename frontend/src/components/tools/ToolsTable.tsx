import type { Tool } from "../../types/Tool"
import type { SortField, SortOrder } from "../../hooks/useToolsTable"
import StatusBadge from "../ui/StatusBadge"

interface Props {
  tools: Tool[]
  loading?: boolean
  handleSort: (field: SortField) => void
  sortField: SortField
  sortOrder: SortOrder
  page: number
  setPage: (page: number) => void
  totalPages: number
  onView?: (tool: Tool) => void
  onEdit?: (tool: Tool) => void
  onToggleStatus?: (tool: Tool) => void
}

export default function ToolsTable({
  tools,
  loading,
  handleSort,
  sortField,
  sortOrder,
  page,
  setPage,
  totalPages,
  onView,
  onEdit,
  onToggleStatus
}: Props) {

  const arrow = (field: SortField) =>
    sortField === field ? (sortOrder === "asc" ? " ↑" : " ↓") : ""

  if (loading) {
    return (
      <div className="bg-gray-900 rounded-xl p-10 text-center text-gray-400">
        Loading tools...
      </div>
    )
  }

  if (tools.length === 0) {
    return (
      <div className="bg-gray-900 rounded-xl p-10 text-center text-gray-400">
        No tools found
      </div>
    )
  }

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat("fr-FR", {
      style: "currency",
      currency: "EUR",
      maximumFractionDigits: 0
    }).format(value)

  return (

    <div className="bg-gray-900 rounded-xl overflow-hidden">

      <table className="w-full text-sm">

        <thead className="bg-gray-800 text-gray-300">

          <tr>

            <th
              className="p-4 text-left cursor-pointer hover:text-white"
              onClick={() => handleSort("name")}
            >
              Tool{arrow("name")}
            </th>

            <th
              className="p-4 text-left cursor-pointer hover:text-white"
              onClick={() => handleSort("category")}
            >
              Category{arrow("category")}
            </th>

            <th className="p-4 text-left">
              Department
            </th>

            <th
              className="p-4 text-left cursor-pointer hover:text-white"
              onClick={() => handleSort("status")}
            >
              Status{arrow("status")}
            </th>

            <th className="p-4 text-left">
              Users
            </th>

            <th
              className="p-4 text-left cursor-pointer hover:text-white"
              onClick={() => handleSort("monthly_cost")}
            >
              Monthly Cost{arrow("monthly_cost")}
            </th>

            <th
              className="p-4 text-left cursor-pointer hover:text-white"
              onClick={() => handleSort("updated_at")}
            >
              Last Update{arrow("updated_at")}
            </th>

            <th className="p-4 text-right">
              Actions
            </th>

          </tr>

        </thead>

        <tbody>

          {tools.map((tool) => (

            <tr
              key={tool.id}
              className="border-t border-gray-800 hover:bg-gray-800 transition"
            >

              {/* Tool */}

              <td className="p-4">

                <div className="flex items-center gap-3">

                  <img
                    src={`/logos/${tool.name
                      .toLowerCase()
                      .replace(/\s/g, "")
                      .replace(/-/g, "")}.svg`}
                    alt={tool.name}
                    className="w-7 h-7 object-contain"
                    onError={(e) => {

                      const img = e.currentTarget as HTMLImageElement

                      if (!img.dataset.fallback) {
                        img.dataset.fallback = "true"
                        img.src = img.src.replace(".svg", ".png")
                      } else {
                        img.src = "/logos/default.svg"
                      }

                    }}
                  />

                  <div>

                    <p className="text-white font-medium">
                      {tool.name}
                    </p>

                    <p className="text-gray-400 text-xs max-w-60 truncate">
                      {tool.description}
                    </p>

                  </div>

                </div>

              </td>

              {/* Category */}

              <td className="p-4 text-gray-300">
                {tool.category}
              </td>

              {/* Department */}

              <td className="p-4 text-gray-300">
                {tool.owner_department}
              </td>

              {/* Status */}

              <td className="p-4">
                <StatusBadge status={tool.status} />
              </td>

              {/* Users */}

              <td className="p-4 text-gray-300">
                {tool.active_users_count}
              </td>

              {/* Cost */}

              <td className="p-4 text-gray-300">
                {formatCurrency(tool.monthly_cost)}
              </td>

              {/* Update */}

              <td className="p-4 text-gray-400 text-xs">
                {tool.updated_at}
              </td>

              {/* Actions */}

              <td className="p-4 text-right">

                <div className="flex justify-end gap-3 text-xs">

                  <button
                    onClick={() => onView?.(tool)}
                    className="text-blue-400 hover:text-blue-300"
                  >
                    View
                  </button>

                  <button
                    onClick={() => onEdit?.(tool)}
                    className="text-yellow-400 hover:text-yellow-300"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => onToggleStatus?.(tool)}
                    className={`hover:underline ${
                      tool.status === "active"
                        ? "text-red-400 hover:text-red-300"
                        : "text-green-400 hover:text-green-300"
                    }`}
                  >
                    {tool.status === "active" ? "Disable" : "Enable"}
                  </button>

                </div>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

      {/* Pagination */}

      <div className="flex items-center justify-between p-4 text-sm text-gray-400 border-t border-gray-800">

        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          className="hover:text-white disabled:opacity-30"
        >
          Previous
        </button>

        <span>
          Page {page} / {totalPages}
        </span>

        <button
          onClick={() => setPage(page + 1)}
          disabled={page === totalPages}
          className="hover:text-white disabled:opacity-30"
        >
          Next
        </button>

      </div>

    </div>

  )
}