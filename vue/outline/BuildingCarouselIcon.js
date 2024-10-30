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
    _createElementVNode("path", { d: "M6 12a6 6 0 1 0 12 0 6 6 0 1 0-12 0" }),
    _createElementVNode("path", { d: "M3 8a2 2 0 1 0 4 0 2 2 0 1 0-4 0M10 4a2 2 0 1 0 4 0 2 2 0 1 0-4 0M17 8a2 2 0 1 0 4 0 2 2 0 1 0-4 0M3 16a2 2 0 1 0 4 0 2 2 0 1 0-4 0M17 16a2 2 0 1 0 4 0 2 2 0 1 0-4 0M8 22l4-10 4 10" })
  ]))
}