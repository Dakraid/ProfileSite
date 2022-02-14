module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
        jquery: true,
        "shared-node-browser": true,
    },
    extends: [
        "eslint:recommended", "airbnb-base",
    ],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    rules: {
        indent: ["warn", 4],
        quotes: ["warn", "double"],
        "linebreak-style": ["warn", "windows"],
    },
};
