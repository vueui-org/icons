const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    height: "16px",
    width: "16px"
  }, [
    _createElementVNode("path", { d: "M3 16v-6a2 2 0 1 1 4 0v6M3 13h4M10 8v6a2 2 0 1 0 4 0v-1a2 2 0 1 0-4 0v1M20.732 12A2 2 0 0 0 17 13v1a2 2 0 0 0 3.726 1.01" })
  ]))
}