import { MoreHorizontal } from "lucide-react"
import { useState } from "react"

interface Props {
  onView?: () => void
  onEdit?: () => void
  onDisable?: () => void
}

export default function ToolsActions({
  onView,
  onEdit,
  onDisable
}: Props) {

  const [open, setOpen] = useState(false)

  return (
    <div className="relative">

      <button
        onClick={() => setOpen(!open)}
        className="p-2 hover:bg-gray-800 rounded"
      >
        <MoreHorizontal size={18} />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-32 bg-gray-900 border border-gray-800 rounded-lg shadow-lg z-10">

          <button
            onClick={onView}
            className="block w-full text-left px-4 py-2 hover:bg-gray-800 text-sm"
          >
            View
          </button>

          <button
            onClick={onEdit}
            className="block w-full text-left px-4 py-2 hover:bg-gray-800 text-sm"
          >
            Edit
          </button>

          <button
            onClick={onDisable}
            className="block w-full text-left px-4 py-2 hover:bg-gray-800 text-sm text-red-400"
          >
            Disable
          </button>

        </div>
      )}

    </div>
  )
}