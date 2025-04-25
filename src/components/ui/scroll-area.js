import React, { forwardRef } from "react"
import { cn } from "@/lib/utils"

/**
 * Componente para exibir conteúdo rolável com barras de rolagem estilizadas.
 * @param {object} props - As propriedades do componente ScrollArea.
 * @param {string} [props.className] - Classes CSS adicionais para a área de rolagem.
 * @param {React.ReactNode} props.children - O conteúdo a ser exibido dentro da área de rolagem.
 * @param {...any} propsRest - Outras propriedades HTML para o elemento div.
 * @param {React.Ref<HTMLDivElement>} ref - A ref encaminhada para o elemento div.
 * @returns {React.ReactNode} Um elemento div estilizado como uma área de rolagem.
 */
const ScrollArea = forwardRef((props, ref) => {
    const { className, children, ...propsRest } = props;
    return (
      <div
        className={cn("relative overflow-hidden", className)}
        ref={ref}
        {...propsRest}
      >
        <div className="relative h-full w-full">
          {children}
          <div className="absolute bottom-0 right-0 h-2 w-2 rounded-bl-lg bg-gray-900" />
        </div>
      </div>
    );
  });
ScrollArea.displayName = "ScrollArea"

export { ScrollArea }

