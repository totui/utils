module.exports = {
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@totalpave/recommendedTS"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "project": "./tsconfig-tests.json",
        "sourceType": "module",
        "tsconfigRootDir": __dirname
    },
    "plugins": [
        "react",
        "@typescript-eslint",
        "@totalpave"
    ],
    "settings": {
        "react": {
            "version": "detect"
        }
    },
    "env": {
        "node": true,
        "jasmine": true
    },
    "rules": {
        "no-console": "error"
    }
};
