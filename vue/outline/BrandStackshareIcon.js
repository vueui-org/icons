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
    _createElementVNode("path", { d: "M17 6a2 2 0 1 0 4 0 2 2 0 1 0-4 0M17 18a2 2 0 1 0 4 0 2 2 0 1 0-4 0M3 12a2 2 0 1 0 4 0 2 2 0 1 0-4 0M7 12h3l3.5 6H17M17 6h-3.5L10 12" })
  ]))
}