module.exports = function() {
  return {
    plugins: [
      ["@babel/plugin-transform-react-jsx", { "pragma": "elfinMakeDOM" }],
      ["babel-plugin-jsx-pragmatic", { "module": "@elfiner/jsx-pragma", "import": "elfinMakeDOM" }]
    ],
  };
};