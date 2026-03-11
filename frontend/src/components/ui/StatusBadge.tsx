type Status = "active" | "unused" | "expiring"

interface Props {
  status: Status
}

export default function StatusBadge({ status }: Props) {

  const styles: Record<Status, string> = {
    active: "bg-green-500/20 text-green-400",
    expiring: "bg-orange-500/20 text-orange-400",
    unused: "bg-red-500/20 text-red-400"
  }

  const label =
    status.charAt(0).toUpperCase() + status.slice(1)

  return (
    <span
      className={`
        px-3
        py-1
        rounded-full
        text-xs
        font-medium
        ${styles[status]}
      `}
    >
      {label}
    </span>
  )
}