import React, { forwardRef } from "react"
import { cn } from "@/lib/utils"

/**
 * Componente para exibir um badge com diferentes estilos.
 */
const Badge = forwardRef(
  /**
   * @param {object} props - As propriedades do componente Badge.
   * @param {string} [props.className] - Classes CSS adicionais para o badge.
   * @param {string} [props.variant] - O estilo do badge.
   * @param {...any} propsRest - Outras propriedades HTML para o elemento div.
   * @param {any} ref - A ref encaminhada para o elemento div.
   */
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <div
        className={cn(
          "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
          variant === "default" &&
            "bg-primary text-primary-foreground border-primary",
          variant === "secondary" &&
            "bg-secondary text-secondary-foreground border-secondary",
          variant === "destructive" &&
            "bg-destructive text-destructive-foreground border-destructive",
          variant === "outline" &&
            "text-foreground",
          variant === "success" &&
            "bg-green-500 text-white border-green-500",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Badge.displayName = "Badge"

export { Badge }
