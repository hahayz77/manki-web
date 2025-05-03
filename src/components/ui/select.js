import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

const Select = forwardRef(
    /**
     * Componente Select para seleção de opções.
     *
     * @param {object} props - Propriedades do componente Select.
     * @param {React.ReactNode} props.children - Os nós filhos do componente.
     * @param {string} [props.className] - Classes CSS adicionais.
     * @param {string} [props.value] - Valor inicial do Select.
     * @param {function} [props.onValueChange] - Função chamada quando o valor muda.
     * @param {boolean} [props.disabled] - Se o Select está desabilitado.
     * @param {string} [props.name] - O nome do input do formulário.
     * @param {string} [props.id] - O ID do Select.
     * @param {any} [props.defaultValue] - O valor padrão do Select.
     * @param {React.HTMLAttributes<HTMLDivElement>} props.rest - Outras propriedades HTML de div.
     */
    (
        {
            children,
            className,
            value,
            onValueChange,
            disabled,
            name,
            id,
            defaultValue,
            ...props
        },
        ref
    ) => {
        return (
            <div className={cn("relative", className)} {...props} ref={ref}>
                {children}
            </div>
        );
    }
);
Select.displayName = "Select";

/**
 * Componente SelectTrigger para ativar a exibição das opções.
 */
const SelectTrigger = forwardRef(
    /**
     * @param {object} props
     * @param {React.ReactNode} props.children
     * @param {string} [props.className]
     * @param {React.MouseEventHandler<HTMLButtonElement>} [props.onClick]
     * @param {boolean} [props.disabled]
     * @param {string} [props.id]
     * @param {string} [props.ariaLabel]
     * @param {React.HTMLAttributes<HTMLButtonElement>} props.rest
     */
    (
        { children, className, onClick, disabled, id, ariaLabel, ...props },
        ref
    ) => {
        return (
            <button
                ref={ref}
                onClick={onClick}
                disabled={disabled}
                className={cn(
                    "flex items-center justify-between w-full px-3 py-2 rounded-md border appearance-none",
                    "focus:outline-none focus:ring-2 focus:ring-blue-500",
                    disabled
                        ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                        : "bg-white text-gray-900 dark:bg-gray-800 dark:text-white border-gray-300 dark:border-gray-700",
                    className
                )}
                id={id}
                aria-label={ariaLabel}
                {...props}
            >
                {children}
            </button>
        );
    }
);
SelectTrigger.displayName = "SelectTrigger";

/**
 * Componente SelectValue para exibir o valor selecionado.
 */
const SelectValue = forwardRef(
    /**
     * @param {object} props
     * @param {string} [props.className]
     * @param {string} [props.placeholder]
     * @param {React.ReactNode} props.children
     * @param {React.HTMLAttributes<HTMLSpanElement>} props.rest
     */
    ({ className, placeholder, children, ...props }, ref) => {
        return (
            <span
                ref={ref}
                className={cn(
                    "truncate",
                    children
                        ? "text-gray-900 dark:text-white"
                        : "text-gray-500 dark:text-gray-400",
                    className
                )}
                {...props}
            >
                {children || placeholder}
            </span>
        );
    }
);
SelectValue.displayName = "SelectValue";

/**
 * Componente SelectContent para exibir as opções de seleção.
 */
const SelectContent = forwardRef(
    /**
     * @param {object} props
     * @param {React.ReactNode} props.children
     * @param {string} [props.className]
     * @param {string} [props.position]
     * @param {boolean} [props.align]
     * @param {boolean} [props.sideOffset]
     * @param {React.HTMLAttributes<HTMLDivElement>} props.rest
     */
    (
        {
            children,
            className,
            position = "popper",
            align = "start",
            sideOffset,
            ...props
        },
        ref
    ) => {
        return (
            <div
                ref={ref}
                className={cn(
                    "relative z-50 min-w-[8rem] overflow-y-auto rounded-md border shadow-md",
                    "bg-white text-gray-900 dark:bg-gray-800 dark:text-white border-gray-200 dark:border-gray-700",
                    position === "popper" &&
                        "max-h-[var(--radix-select-content-available-height)]",
                    className
                )}
                {...props}
            >
                <div className="p-1">{children}</div>
            </div>
        );
    }
);
SelectContent.displayName = "SelectContent";

/**
 * Componente SelectItem para representar uma opção de seleção.
 */
const SelectItem = forwardRef(
    /**
     * @param {object} props
     * @param {React.ReactNode} props.children
     * @param {string} props.value
     * @param {string} [props.className]
     * @param {boolean} [props.disabled]
     * @param {string} [props.label]
     * @param {React.HTMLAttributes<HTMLElement>} props.rest
     */
    ({ children, value, className, disabled, label, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    "px-2 py-1.5 rounded-md cursor-pointer select-none",
                    disabled
                        ? "text-gray-500 dark:text-gray-400 opacity-70 cursor-not-allowed"
                        : "hover:bg-gray-100 dark:hover:bg-gray-700",
                    className
                )}
                data-value={value}
                aria-disabled={disabled}
                {...props}
            >
                {children}
            </div>
        );
    }
);

SelectItem.displayName = "SelectItem";

export { Select, SelectTrigger, SelectValue, SelectContent, SelectItem };
