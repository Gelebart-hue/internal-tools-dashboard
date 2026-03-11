import type { Tool } from "../../types/Tool"

interface Props {
  tools: Tool[]

  department: string
  setDepartment: (value: string) => void

  status: string
  setStatus: (value: string) => void

  category: string
  setCategory: (value: string) => void
}

export default function ToolsFilters({
  tools,
  department,
  setDepartment,
  status,
  setStatus,
  category,
  setCategory
}: Props) {

  // Unique departments
  const departments = [...new Set(tools.map(tool => tool.owner_department))]

  // Unique categories
  const categories = [...new Set(tools.map(tool => tool.category))]

  return (
    <div className="flex flex-wrap gap-4 mb-6">

      {/* Department */}
      <select
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
        className="bg-gray-900 border border-gray-800 px-4 py-2 rounded-lg text-sm"
      >
        <option value="">All Departments</option>

        {departments.map((dept) => (
          <option key={dept} value={dept}>
            {dept}
          </option>
        ))}

      </select>

      {/* Status */}
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="bg-gray-900 border border-gray-800 px-4 py-2 rounded-lg text-sm"
      >
        <option value="">All Status</option>
        <option value="active">Active</option>
        <option value="expiring">Expiring</option>
        <option value="unused">Unused</option>
      </select>

      {/* Category */}
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="bg-gray-900 border border-gray-800 px-4 py-2 rounded-lg text-sm"
    >
    <option value="">Toutes les catégories</option>

    {categories.map((cat) => (
        <option key={cat} value={cat}>
        {cat}
        </option>
    ))}

    </select>

    </div>
  )
}
