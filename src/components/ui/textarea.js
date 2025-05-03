import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

/**
 * Componente para entrada de texto em várias linhas.
 *
 * @param {object} props - Propriedades do componente Textarea.
 * @param {string} [props.className] - Classes CSS adicionais para o textarea.
 * @param {string} [props.placeholder] - Texto de espaço reservado a ser exibido quando o textarea está vazio.
 * @param {string} [props.value] - O valor do textarea.
 * @param {function} [props.onChange] - Função de retorno de chamada a ser executada quando o valor do textarea é alterado.
 * @param {boolean} [props.disabled] - Se o textarea está desabilitado.
 * @param {number} [props.rows] - Numero de linhas
 * @param {React.TextareaHTMLAttributes<HTMLTextAreaElement>} props.rest - Outras propriedades HTML de <textarea>.
 */
const Textarea = React.forwardRef(
    (
        {
            className,
            placeholder,
            value,
            onChange,
            rows = 3,
            disabled,
            ...props
        },
        ref
    ) => {
        return (
            <textarea
                ref={ref}
                className={cn(
                    "flex w-full rounded-md border bg-transparent px-3 py-2 text-sm",
                    "focus:outline-none focus:ring-2 focus:ring-blue-500",
                    "placeholder:text-gray-500 dark:placeholder:text-gray-400",
                    disabled
                        ? "bg-gray-200 text-gray-500 dark:bg-gray-800 dark:text-gray-400 cursor-not-allowed opacity-50"
                        : "bg-white text-gray-900 dark:bg-gray-800 dark:text-white border-gray-300 dark:border-gray-700",
                    className
                )}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                disabled={disabled}
                rows={rows}
                {...props}
            />
        );
    }
);
Textarea.displayName = "Textarea";

export { Textarea };
