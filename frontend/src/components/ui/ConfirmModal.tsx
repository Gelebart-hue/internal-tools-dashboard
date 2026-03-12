interface Props {
  open: boolean
  title: string
  message: string
  onConfirm: () => void
  onClose: () => void
}

export default function ConfirmModal({
  open,
  title,
  message,
  onConfirm,
  onClose
}: Props) {

  if (!open) return null

  return (

    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">

      <div className="bg-gray-900 p-6 rounded-xl w-96 space-y-4">

        <h2 className="text-white font-semibold">
          {title}
        </h2>

        <p className="text-gray-400 text-sm">
          {message}
        </p>

        <div className="flex justify-end gap-3">

          <button
            onClick={onClose}
            className="text-gray-400"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="bg-red-600 px-4 py-2 rounded"
          >
            Confirm
          </button>

        </div>

      </div>

    </div>
  )
}