import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals"),
  {
    rules: {
      // Regras específicas para o projeto
      "@next/next/no-img-element": "off", // Permite usar img ao invés de Image quando necessário
      "react/no-unescaped-entities": "off", // Permite aspas não escapadas em JSX
      "react/display-name": "off", // Desabilita verificação de display name
      "prefer-const": "error",
      "no-var": "error",
      "no-console": "warn", // Avisa sobre console.log em produção
    },
  },
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },
];

export default eslintConfig;
