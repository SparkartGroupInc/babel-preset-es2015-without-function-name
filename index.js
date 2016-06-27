module.exports = {
  plugins: [
    [require("babel-plugin-transform-es2015-template-literals"), {loose: true}],
    [require("babel-plugin-transform-es2015-literals"), {loose: true}],
    // [require("babel-plugin-transform-es2015-function-name"), {loose: true}],
    [require("babel-plugin-transform-es2015-arrow-functions"), {loose: true}],
    [require("babel-plugin-transform-es2015-block-scoped-functions"), {loose: true}],
    [require("babel-plugin-transform-es2015-classes"), {loose: true}],
    [require("babel-plugin-transform-es2015-object-super"), {loose: true}],
    [require("babel-plugin-transform-es2015-shorthand-properties"), {loose: true}],
    [require("babel-plugin-transform-es2015-computed-properties"), {loose: true}],
    [require("babel-plugin-transform-es2015-for-of"), {loose: true}],
    [require("babel-plugin-transform-es2015-sticky-regex"), {loose: true}],
    [require("babel-plugin-transform-es2015-unicode-regex"), {loose: true}],
    [require("babel-plugin-check-es2015-constants"), {loose: true}],
    [require("babel-plugin-transform-es2015-spread"), {loose: true}],
    [require("babel-plugin-transform-es2015-parameters"), {loose: true}],
    [require("babel-plugin-transform-es2015-destructuring"), {loose: true}],
    [require("babel-plugin-transform-es2015-block-scoping"), {loose: true}],
    [require("babel-plugin-transform-es2015-typeof-symbol"), {loose: true}],
    [require("babel-plugin-transform-es2015-modules-commonjs"), {loose: true}],
    [require("babel-plugin-transform-regenerator"), { loose: true, async: false, asyncGenerators: false }],
  ]
};
