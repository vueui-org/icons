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
    _createElementVNode("path", { d: "M17 4a1 1 0 1 0 2 0 1 1 0 1 0-2 0M3 9l4.5 1 3 2.5M13 21v-8l3-5.5" }),
    _createElementVNode("path", { d: "m8 4.5 4 2 4 1 4 3.5-2 3.5" })
  ]))
}