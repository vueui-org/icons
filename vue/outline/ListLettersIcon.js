const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    height: "16px",
    width: "16px"
  }, [
    _createElementVNode("path", { d: "M11 6h9M11 12h9M11 18h9M4 10V5.5a1.5 1.5 0 0 1 3 0V10M4 8h3M4 20h1.5a1.5 1.5 0 0 0 0-3H4h1.5a1.5 1.5 0 0 0 0-3H4z" })
  ]))
}