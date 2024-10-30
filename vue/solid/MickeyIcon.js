const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    height: "16px",
    width: "16px"
  }, [
    _createElementVNode("path", { d: "M18.501 2a4.5 4.5 0 0 1 .878 8.913 8 8 0 1 1-15.374 3.372L4 14l.005-.285a8 8 0 0 1 .615-2.803 4.5 4.5 0 0 1-3.187-6.348 4.5 4.5 0 0 1 3.596-2.539l.225-.018L5.535 2l.244.009a4.5 4.5 0 0 1 4.215 4.247 8 8 0 0 1 4.013 0A4.5 4.5 0 0 1 18.5 2z" })
  ]))
}