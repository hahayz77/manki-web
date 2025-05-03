import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

/**
 * Componente para exibir dados em formato de tabela.
 *
 * @param {object} props - Propriedades do componente Table.
 * @param {React.ReactNode} props.children - Os elementos filhos da tabela (TableHeader, TableBody, TableRow, etc.).
 * @param {string} [props.className] - Classes CSS adicionais para a tabela.
 * @param {React.HTMLAttributes<HTMLTableElement>} props.rest - Outras propriedades HTML de <table>.
 */
const Table = React.forwardRef(({ className, children, ...props }, ref) => {
    return (
        <table ref={ref} className={cn("w-full", className)} {...props}>
            {children}
        </table>
    );
});
Table.displayName = "Table";

/**
 * Componente para o corpo da tabela.
 *
 * @param {object} props - Propriedades do componente TableBody.
 * @param {React.ReactNode} props.children - Os elementos filhos do corpo da tabela (TableRow).
 * @param {string} [props.className] - Classes CSS adicionais para o corpo da tabela.
 * @param {React.HTMLAttributes<HTMLTableSectionElement>} props.rest - Outras propriedades HTML de <tbody>.
 */
const TableBody = React.forwardRef(({ className, children, ...props }, ref) => {
    return (
        <tbody ref={ref} className={cn("", className)} {...props}>
            {children}
        </tbody>
    );
});
TableBody.displayName = "TableBody";

/**
 * Componente para células de dados da tabela.
 *
 * @param {object} props - Propriedades do componente TableCell.
 * @param {React.ReactNode} props.children - O conteúdo da célula.
 * @param {string} [props.className] - Classes CSS adicionais para a célula.
 * @param {string} [props.align] - Alinhamento do texto na célula ('left', 'center', 'right').
 * @param {React.TdHTMLAttributes<HTMLTableCellElement>} props.rest - Outras propriedades HTML de <td>.
 */
const TableCell = React.forwardRef(
    ({ className, children, align, ...props }, ref) => {
        const alignClasses = {
            left: "text-left",
            center: "text-center",
            right: "text-right",
        };

        return (
            <td
                ref={ref}
                className={cn(alignClasses[align] || "", className)}
                {...props}
            >
                {children}
            </td>
        );
    }
);
TableCell.displayName = "TableCell";

/**
 * Componente para o cabeçalho da tabela.
 *
 * @param {object} props - Propriedades do componente TableHeader.
 * @param {React.ReactNode} props.children - Os elementos filhos do cabeçalho da tabela (TableRow).
 * @param {string} [props.className] - Classes CSS adicionais para o cabeçalho da tabela.
 * @param {React.HTMLAttributes<HTMLTableSectionElement>} props.rest - Outras propriedades HTML de <thead>.
 */
const TableHeader = React.forwardRef(
    ({ className, children, ...props }, ref) => {
        return (
            <thead ref={ref} className={cn("", className)} {...props}>
                {children}
            </thead>
        );
    }
);
TableHeader.displayName = "TableHeader";

/**
 * Componente para linhas da tabela.
 *
 * @param {object} props - Propriedades do componente TableRow.
 * @param {React.ReactNode} props.children - Os elementos filhos da linha da tabela (TableCell, TableHead).
 * @param {string} [props.className] - Classes CSS adicionais para a linha da tabela.
 * @param {React.TrHTMLAttributes<HTMLTableRowElement>} props.rest - Outras propriedades HTML de <tr>.
 */
const TableRow = React.forwardRef(({ className, children, ...props }, ref) => {
    return (
        <tr ref={ref} className={cn("", className)} {...props}>
            {children}
        </tr>
    );
});
TableRow.displayName = "TableRow";

/**
 * Componente para células de cabeçalho da tabela.
 *
 * @param {object} props - Propriedades do componente TableHead.
 * @param {React.ReactNode} props.children - O conteúdo da célula de cabeçalho.
 * @param {string} [props.className] - Classes CSS adicionais para a célula de cabeçalho.
 * @param {string} [props.align] - Alinhamento do texto na célula de cabeçalho ('left', 'center', 'right').
 * @param {React.ThHTMLAttributes<HTMLTableHeaderCellElement>} props.rest - Outras propriedades HTML de <th>.
 */
const TableHead = React.forwardRef(
    ({ className, children, align, ...props }, ref) => {
        const alignClasses = {
            left: "text-left",
            center: "text-center",
            right: "text-right",
        };
        return (
            <th
                ref={ref}
                className={cn(
                    "font-semibold",
                    alignClasses[align] || "",
                    className
                )}
                {...props}
            >
                {children}
            </th>
        );
    }
);
TableHead.displayName = "TableHead";

export { Table, TableBody, TableCell, TableHeader, TableRow, TableHead };
