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
    _createElementVNode("path", { d: "M11 6a5 3 0 1 0 10 0 5 3 0 1 0-10 0" }),
    _createElementVNode("path", { d: "M11 6v4c0 1.657 2.239 3 5 3s5-1.343 5-3V6" }),
    _createElementVNode("path", { d: "M11 10v4c0 1.657 2.239 3 5 3s5-1.343 5-3v-4" }),
    _createElementVNode("path", { d: "M11 14v4c0 1.657 2.239 3 5 3s5-1.343 5-3v-4M7 9H4.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3H3M5 15v1m0-8v1" })
  ]))
}