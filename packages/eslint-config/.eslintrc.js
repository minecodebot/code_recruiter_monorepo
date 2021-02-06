//  module.exports = {
//    root: true,
//    extends: [
//      'eslint:recommended'
//    ],
//    overrides: [{
//      files: ["**/*.ts", "**/*.tsx"],
//      env: {
//        browser: true,
//        es2020: true,
//        node: true,
//        jest: true
//      },
//      extends: [
//        'eslint:recommended',
//        'plugin:react/recommended',
//        'standard',
//        'plugin:@typescript-eslint/eslint-recommended',
//        'plugin:@typescript-eslint/recommended',
//        'prettier/@typescript-eslint',
//        'prettier/standard',
//        'prettier/react'
//      ],
//      parser: '@typescript-eslint/parser',
//      parserOptions: {
//        ecmaFeatures: {
//          jsx: true
//        },
//        ecmaVersion: 11,
//        sourceType: 'module'
//      },
//      plugins: ['react', '@typescript-eslint', 'prettier'],
//      rules: {
//        'prettier/prettier': 'error',
//        "@typescript-eslint/no-explicit-any": 0
//      },
//      settings: {
//        'import/resolver': {
//          typescript: {}
//        },
//        react: {
//          version: 'detect',
//        },
//      }
//    }]
//  }


module.exports = {
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
    ecmaFeatures: {
      jsx: true // Allows for the parsing of JSX
    }
  },
  settings: {
    react: {
      version: "detect" // Tells eslint-plugin-react to automatically detect the version of React to use
    }
  },
  extends: [
    "plugin:react/recommended", // Uses the recommended rules from @eslint-plugin-react
    "plugin:@typescript-eslint/recommended", // Uses the recommended rules from @typescript-eslint/eslint-plugin
    "prettier/@typescript-eslint", // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    "plugin:prettier/recommended" // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
  },
};
