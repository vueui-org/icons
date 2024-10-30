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
    _createElementVNode("path", { d: "M19 8h-3a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h3v-4h-1M5 8h4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H6a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h4" })
  ]))
}