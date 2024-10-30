const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M14 3v4a1 1 0 0 0 1 1h4M19 18v1a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-1M3 14h3m4.5 0h3m4.5 0h3" }),
    _createElementVNode("path", { d: "M5 10V5a2 2 0 0 1 2-2h7l5 5v2" })
  ]))
}