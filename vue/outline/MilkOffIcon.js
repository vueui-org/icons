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
    _createElementVNode("path", { d: "M10 6h6V4a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1M16 6l1.094 1.759a6 6 0 0 1 .906 3.17V14m0 4v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-8.071a6 6 0 0 1 .906-3.17l.327-.525" }),
    _createElementVNode("path", { d: "M10 16a2 2 0 1 0 4 0 2 2 0 1 0-4 0M3 3l18 18" })
  ]))
}