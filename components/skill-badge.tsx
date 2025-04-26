import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface SkillBadgeProps {
  icon: ReactNode
  name: string
  className?: string
}

export default function SkillBadge({ icon, name, className }: SkillBadgeProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-gray-800 rounded-full shadow-sm border border-gray-200 dark:border-gray-700",
        "hover:shadow-md transition-all duration-300 hover:-translate-y-1",
        className,
      )}
    >
      {icon}
      <span className="text-sm font-medium text-gray-800 dark:text-gray-200">{name}</span>
    </div>
  )
}
