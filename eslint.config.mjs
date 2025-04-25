import { dirname } from "path"
import { fileURLToPath } from "url"
import { FlatCompat } from "@eslint/eslintrc"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  ...compat.extends("next/core-web-vitals"),
  'plugin:prettier/recommended', // Adiciona o plugin do Prettier e configura as regras recomendadas
  {
    rules: {
      'indent': ['error', 4], // Mantém a sua regra de indentação para o ESLint reportar erros
    },
  },
]

export default eslintConfig