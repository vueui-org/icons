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
    _createElementVNode("path", { d: "M13 15h4M10 15a5 5 0 1 0 10 0 5 5 0 1 0-10 0M22 22l-3-3M6 18H5a2 2 0 0 1-2-2v-1M3 11v-1M3 6V5a2 2 0 0 1 2-2h1M10 3h1M15 3h1a2 2 0 0 1 2 2v1" })
  ]))
}