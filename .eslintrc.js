module.exports = {
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "node": true,
    "jquery": true
  },
  "parserOptions": {
    "ecmaVersion": 6,
    "ecmaFeatures": {
      "jsx": true,
      "experimentalObjectRestSpread": true
    },
    "sourceType": "module"
  },
  "extends": "airbnb-base",
  "plugins": ["import", "html", "react", "jsx-a11y"],
  "rules": {
    // 0 "off", 1 "warn" 2 "error"
    "no-console": "warn",
    "quotes": ["error", "single"],
    "no-underscore-dangle": "warn",
    "no-unused-vars": ["off", { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }],
    "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],
    "no-use-before-define": ["off", { "functions": true, "classes": true }],
    "class-methods-use-this": ["off"],
    "comma-dangle": ["off", "never"],
    "no-trailing-spaces": ["off", { "skipBlankLines": true }],
    "linebreak-style": 0,
    "global-require": 0,
    "eslint linebreak-style": [0, "error", "windows"],
    "semi": ["off", "never"],
    "max-len": ["off", { "code": 100 }],
    "import/extensions": "off",
    "import/no-unresolved": "off",
    "object-curly-newline": "off",
    "object-curly-spacing": "off",
    "no-undef": "off",
    "consistent-return": "off"
  },

};