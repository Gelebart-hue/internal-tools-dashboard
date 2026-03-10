interface Props {
  status: "active" | "unused" | "expiring"
}

export default function StatusBadge({ status }: Props) {

  const styles = {
    active: "bg-green-500/20 text-green-400",
    expiring: "bg-orange-500/20 text-orange-400",
    unused: "bg-red-500/20 text-red-400"
  }

  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-medium ${styles[status]}`}
    >
      {status}
    </span>
  )
}