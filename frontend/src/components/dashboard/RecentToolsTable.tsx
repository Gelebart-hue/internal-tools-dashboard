import type { Tool } from "../../types/Tool"
import StatusBadge from "../ui/StatusBadge"

interface Props {
  tools: Tool[]
  loading?: boolean
}

const logos: Record<string, string> = {
  figma: "/logos/figma.svg",
  jira: "/logos/jira.svg",
  zoom: "/logos/zoom.svg",
  canva: "/logos/canva.png",
  github: "/logos/github.svg"
}

export default function RecentToolsTable({ tools, loading }: Props) {

  if (loading) {
    return (
      <div className="text-gray-400">
        Loading tools...
      </div>
    )
  }

  return (

    <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">

      <table className="w-full text-left">

        <thead className="bg-gray-800 text-gray-400 text-sm">
          <tr>

            <th className="p-4">Tool</th>
            <th className="p-4">Department</th>
            <th className="p-4">Users</th>
            <th className="p-4">Monthly Cost</th>
            <th className="p-4">Status</th>

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
                    src={
                    logos[tool.name.toLowerCase()] ||
                    "/logos/default.svg"
                    }
                    alt={tool.name}
                    className="w-8 h-8 p-1 rounded-md bg-slate-800 object-contain"
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

    </div>

  )
}