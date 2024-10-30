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
    _createElementVNode("path", { d: "M9 9v8a2 2 0 1 1-2-2h8m3.411 3.417A2 2 0 0 1 15 17v-2m0-4V7a2 2 0 1 1 2 2h-4M9 9H7a2 2 0 0 1-1.417-3.411M3 3l18 18" })
  ]))
}