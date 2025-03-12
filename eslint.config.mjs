import globals from "globals";
import pluginReact from "eslint-plugin-react";
import babelParser from "@babel/eslint-parser"; // 👈 Import Babel parser for JSX

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    files: ["src/**/*.js", "src/**/*.jsx", "src/**/*.ts", "src/**/*.tsx"],
    languageOptions: { 
      globals: globals.browser,
      parser: babelParser, // 👈 Use Babel parser to understand JSX
      parserOptions: {
        requireConfigFile: false, // 👈 Avoid needing a separate Babel config
        babelOptions: {
          presets: ["@babel/preset-react"], // 👈 Ensure JSX is parsed correctly
        },
      },
    },
    plugins: {
      react: pluginReact, // 👈 Correct way to define plugins in Flat Config
    },
    settings: {
      react: {
        version: "detect", // 👈 Automatically detects React version
      },
    },
  },
  {
    rules: {
      "react/react-in-jsx-scope": "off", // 👈 Fix React 17+ JSX error
    },
  },
];
