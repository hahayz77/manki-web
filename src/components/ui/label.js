import React from "react";
import { cn } from "@/lib/utils";

/**
 * Componente para renderizar um rótulo de formulário.
 *
 * @param {object} props - As propriedades do componente.
 * @param {string} [props.className] - Classes CSS adicionais para o rótulo.
 * @param {"default" | "secondary"} [props.variant] - O estilo do rótulo. "default" para o estilo padrão, "secondary" para um estilo secundário.
 * @param {React.LabelHTMLAttributes<HTMLLabelElement>} props.rest - Outras propriedades HTML de <label>.
 */
const Label = React.forwardRef(
    /**
     * @param {LabelProps} props
     * @param {React.ForwardedRef<HTMLLabelElement>} ref
     */
    ({ className, variant = "default", ...props }, ref) => {
        return (
            <label
                ref={ref}
                className={cn(
                    "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
                    variant === "default" && "text-gray-900 dark:text-gray-100",
                    variant === "secondary" &&
                        "text-gray-500 dark:text-gray-400",
                    className
                )}
                {...props}
            />
        );
    }
);
Label.displayName = "Label";

export { Label };
