module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["code-isolation"],
  root: true,

  rules: {
    "code-isolation/disallow-by-regexp": [
      "error",
      {
        allow: [".eslintrc.js", "src/allowed.ts"],
        base: __dirname,
        strings: ["disallowed by regexp 1"]
      },
      {
        base: __dirname,
        disallow: ["src/disallowed.ts"],
        strings: ["disallowed by regexp 2"]
      }
    ],

    "code-isolation/disallow-identifier": [
      "error",
      {
        allow: ["src/allowed.ts"],
        base: __dirname,
        ids: ["disallowedIdentifier"]
      }
    ],

    "code-isolation/disallow-import": [
      "error",
      {
        allowSources: ["./import/allowed.ts"],
        base: __dirname,
        disallow: ["src/disallowed.ts"],
        disallowSources: ["./import/"]
      }
    ]
  }
};
