import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Função utilitária para combinar classes CSS.
 * @param {...any} inputs - Uma lista de valores de classe CSS a serem combinados.
 * @returns {string} Uma string contendo todas as classes CSS combinadas.
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs))
}
