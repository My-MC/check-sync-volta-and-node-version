module.exports = {
  env: { es6: true, node: true },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:@typescript-eslint/stylistic",
    "plugin:@typescript-eslint/stylistic-type-checked",
    "eslint:recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    // tsconfigRootDir: __dirname,
  },
  plugins: ["@typescript-eslint"],
};
