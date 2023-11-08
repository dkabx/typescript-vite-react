module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:react-hooks/recommended",
    "eslint-config-prettier",
    "plugin:import/typescript",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  plugins: ["react-refresh", "@typescript-eslint/eslint-plugin"],
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      node: {
        paths: [".", "src", "assets"],
        extensions: [".js", ".jsx", ".ts", ".tsx", ".svg"],
      },
      typescript: {},
      alias: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        map: [["@", "./src"]],
      },
    },
  },
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "no-unused-vars": [
      "error",
      {
        vars: "all",
        args: "after-used",
        ignoreRestSiblings: true,
        argsIgnorePattern: "^_",
      },
    ],
    "react/react-in-jsx-scope": "off",
    "prettier/prettier": [
      "error",
      {
        singleQuote: true,
        trailingComma: "all",
        bracketSpacing: true,
        tabWidth: 2,
        jsxBracketSameLine: false,
        endOfLine: "auto",
      },
    ],
    "max-len": ["error", 110],
  },
};