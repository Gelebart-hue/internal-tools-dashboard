import { ArrowUp, ArrowDown } from "lucide-react"
import type { Tool } from "../../types/Tool"
import type { SortField } from "../../hooks/useToolsTable"

type Props = {
  tools: Tool[]
  loading?: boolean
  handleSort: (field: SortField) => void
  sortField: SortField
  sortOrder: "asc" | "desc"
  page: number
  setPage: React.Dispatch<React.SetStateAction<number>>
  totalPages: number
}

function StatusBadge({ status }: { status: Tool["status"] }) {

  const styles = {
    active: "bg-green-500/20 text-green-400",
    unused: "bg-red-500/20 text-red-400",
    expiring: "bg-orange-500/20 text-orange-400"
  }

  return (
    <span className={`px-3 py-1 text-xs rounded-full font-medium ${styles[status]}`}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  )
}

export default function ToolsTable({
  tools,
  loading = false,
  handleSort,
  sortField,
  sortOrder,
  page,
  setPage,
  totalPages
}: Props) {

  const SortIcon = ({ column }: { column: SortField }) => {

    if (sortField !== column) return null

    return sortOrder === "asc"
      ? <ArrowUp size={14} className="inline ml-1" />
      : <ArrowDown size={14} className="inline ml-1" />
  }

  if (loading) {
    return (
      <div className="animate-pulse space-y-3">
        <div className="h-10 bg-gray-800 rounded"></div>
        <div className="h-10 bg-gray-800 rounded"></div>
        <div className="h-10 bg-gray-800 rounded"></div>
      </div>
    )
  }

  if (!tools.length) {
    return (
      <div className="text-center py-12 text-gray-400">
        Aucun outil trouvé
      </div>
    )
  }

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">

      <table className="w-full text-sm">

        <thead className="bg-gray-800 text-gray-300">
          <tr>

            <th
              className="px-6 py-3 text-left cursor-pointer hover:text-purple-400"
              onClick={() => handleSort("name")}
            >
              Outil <SortIcon column="name" />
            </th>

            <th
              className="px-6 py-3 text-left cursor-pointer hover:text-purple-400"
              onClick={() => handleSort("vendor")}
            >
              Vendor <SortIcon column="vendor" />
            </th>

            <th
              className="px-6 py-3 text-left cursor-pointer hover:text-purple-400"
              onClick={() => handleSort("owner_department")}
            >
              Département <SortIcon column="owner_department" />
            </th>

            <th
              className="px-6 py-3 text-left cursor-pointer hover:text-purple-400"
              onClick={() => handleSort("active_users_count")}
            >
              Utilisateurs <SortIcon column="active_users_count" />
            </th>

            <th
              className="px-6 py-3 text-left cursor-pointer hover:text-purple-400"
              onClick={() => handleSort("monthly_cost")}
            >
              Coût mensuel <SortIcon column="monthly_cost" />
            </th>

            <th className="px-6 py-3 text-left">
              Statut
            </th>

          </tr>
        </thead>

        <tbody>

          {tools.map((tool) => (
            <tr
              key={tool.id}
              className="border-b border-gray-800 hover:bg-gray-800/40 transition"
            >

              <td className="px-6 py-4 flex items-center gap-3">

                {tool.icon_url && (
                  <img
                    src={tool.icon_url}
                    alt={tool.name}
                    className="w-6 h-6"
                  />
                )}

                <div>
                  <div className="font-medium">{tool.name}</div>
                  <div className="text-xs text-gray-400">
                    {tool.category}
                  </div>
                </div>

              </td>

              <td className="px-6 py-4 text-gray-300">
                {tool.vendor}
              </td>

              <td className="px-6 py-4">
                {tool.owner_department}
              </td>

              <td className="px-6 py-4">
                {tool.active_users_count}
              </td>

              <td className="px-6 py-4">
                {tool.monthly_cost} €
              </td>

              <td className="px-6 py-4">
                <StatusBadge status={tool.status} />
              </td>

            </tr>
          ))}

        </tbody>

      </table>

      {/* Pagination */}

      <div className="flex justify-between items-center px-6 py-4 bg-gray-900 text-sm">

        <button
          disabled={page === 1}
          onClick={() => setPage((p) => p - 1)}
          className="px-3 py-1 bg-gray-800 rounded disabled:opacity-40"
        >
          Previous
        </button>

        <span className="text-gray-400">
          Page {page} / {totalPages}
        </span>

        <button
          disabled={page === totalPages}
          onClick={() => setPage((p) => p + 1)}
          className="px-3 py-1 bg-gray-800 rounded disabled:opacity-40"
        >
          Next
        </button>

      </div>

    </div>
  )
}