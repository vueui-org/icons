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
    _createElementVNode("path", { d: "M21 12h-6 1a3 3 0 0 1 0 6h-1l3 3M15 15h6M3 5a2 2 0 1 0 4 0 2 2 0 1 0-4 0M15 5a2 2 0 1 0 4 0 2 2 0 1 0-4 0M7 5h8M7 5v8a3 3 0 0 0 3 3h1" })
  ]))
}