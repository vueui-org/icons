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
    _createElementVNode("path", { d: "M5 21h14M17 21v-5h1a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-1V8A5 5 0 0 0 7 8v4H6a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h1v5" }),
    _createElementVNode("path", { d: "M10 14a2 2 0 1 0 4 0 2 2 0 1 0-4 0M6 8h12" })
  ]))
}