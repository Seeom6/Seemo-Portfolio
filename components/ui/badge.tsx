import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1.5 text-xs font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover:scale-105",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm hover:shadow-md",
        secondary:
          "border-transparent bg-secondary/80 text-secondary-foreground hover:bg-secondary backdrop-blur-sm shadow-sm hover:shadow-md",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-sm hover:shadow-md",
        outline:
          "text-foreground border-border/50 hover:border-border bg-background/50 backdrop-blur-sm shadow-sm hover:shadow-md hover:bg-background",
        success:
          "border-transparent bg-green-500/10 text-green-700 dark:text-green-400 hover:bg-green-500/20 shadow-sm hover:shadow-md",
        warning:
          "border-transparent bg-yellow-500/10 text-yellow-700 dark:text-yellow-400 hover:bg-yellow-500/20 shadow-sm hover:shadow-md",
        info:
          "border-transparent bg-blue-500/10 text-blue-700 dark:text-blue-400 hover:bg-blue-500/20 shadow-sm hover:shadow-md",
      },
      size: {
        default: "px-3 py-1.5 text-xs",
        sm: "px-2 py-1 text-xs",
        lg: "px-4 py-2 text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, size, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant, size }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
