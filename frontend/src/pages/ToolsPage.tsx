import ToolsTable from "../components/tools/ToolsTable"
import { useTools } from "../hooks/useTools"
import { useToolsTable } from "../hooks/useToolsTable"

export default function ToolsPage() {

  const { tools, loading } = useTools()

  const {
    search,
    setSearch,
    paginatedTools,
    handleSort,
    sortField,
    sortOrder,
    page,
    setPage,
    totalPages
  } = useToolsTable(tools)

  return (

    <div className="min-h-screen bg-gray-950 text-white p-8">

      <h1 className="text-2xl font-bold mb-6">
        Tools
      </h1>

      <input
        type="text"
        placeholder="Search tool..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-6 w-full max-w-md px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-purple-500"
      />

      {loading ? (
        <p className="text-gray-400">Loading...</p>
      ) : (
        <ToolsTable
          tools={paginatedTools}
          handleSort={handleSort}
          sortField={sortField}
          sortOrder={sortOrder}
          page={page}
          setPage={setPage}
          totalPages={totalPages}
        />
      )}

    </div>
  )
}