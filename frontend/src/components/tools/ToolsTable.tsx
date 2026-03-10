import type { Tool } from "../../types/Tool"
import StatusBadge from "../ui/StatusBadge"

type SortField = "name" | "active_users_count" | "monthly_cost"

interface Props {
  tools: Tool[]
  handleSort: (field: SortField) => void
  sortField: SortField
  sortOrder: "asc" | "desc"
  page: number
  setPage: (page: number) => void
  totalPages: number
}

export default function ToolsTable({
  tools,
  handleSort,
  sortField,
  sortOrder,
  page,
  setPage,
  totalPages
}: Props) {

  const renderArrow = (field: SortField) => {

    if (sortField !== field) return "↕"

    return sortOrder === "asc" ? "▲" : "▼"

  }

  return (

    <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">

      <table className="w-full text-left">

        <thead className="bg-gray-800 text-gray-400 text-sm">
          <tr>

            <th
              className="p-4 cursor-pointer hover:text-white transition"
              onClick={() => handleSort("name")}
            >
              Tool {renderArrow("name")}
            </th>

            <th className="p-4">
              Department
            </th>

            <th
              className="p-4 cursor-pointer hover:text-white transition"
              onClick={() => handleSort("active_users_count")}
            >
              Users {renderArrow("active_users_count")}
            </th>

            <th
              className="p-4 cursor-pointer hover:text-white transition"
              onClick={() => handleSort("monthly_cost")}
            >
              Monthly Cost {renderArrow("monthly_cost")}
            </th>

            <th className="p-4">
              Status
            </th>

          </tr>
        </thead>

        <tbody>

          {tools.map((tool) => (

            <tr
              key={tool.id}
              className="border-t border-gray-800 hover:bg-gray-800/50 transition"
            >

              <td className="p-4 flex items-center gap-3">

                {tool.icon_url && (
                  <img
                    src={tool.icon_url}
                    alt={tool.name}
                    className="w-5 h-5"
                  />
                )}

                {tool.name}

              </td>

              <td className="p-4 text-gray-400">
                {tool.owner_department}
              </td>

              <td className="p-4">
                {tool.active_users_count}
              </td>

              <td className="p-4">
                €{tool.monthly_cost}
              </td>

              <td className="p-4">
                <StatusBadge status={tool.status} />
              </td>

            </tr>

          ))}

        </tbody>

      </table>

      {/* PAGINATION */}

      <div className="flex justify-between items-center p-4 text-sm text-gray-400 border-t border-gray-800">

        <span>
          Page {page} / {totalPages}
        </span>

        <div className="flex gap-2">

          <button
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
            className="px-3 py-1 bg-gray-800 rounded disabled:opacity-40 hover:bg-gray-700"
          >
            Prev
          </button>

          <button
            disabled={page === totalPages}
            onClick={() => setPage(page + 1)}
            className="px-3 py-1 bg-gray-800 rounded disabled:opacity-40 hover:bg-gray-700"
          >
            Next
          </button>

        </div>

      </div>

    </div>

  )
}