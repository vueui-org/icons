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
    _createElementVNode("path", { d: "M10 5a2 2 0 1 0 4 0 2 2 0 1 0-4 0M6 12a2 2 0 1 0 4 0 2 2 0 1 0-4 0M10 19a2 2 0 1 0 4 0 2 2 0 1 0-4 0M18 19a2 2 0 1 0 4 0 2 2 0 1 0-4 0M2 19a2 2 0 1 0 4 0 2 2 0 1 0-4 0M14 12a2 2 0 1 0 4 0 2 2 0 1 0-4 0M5 17l2-3M9 10l2-3M13 7l2 3M17 14l2 3M15 14l-2 3M9 14l2 3" })
  ]))
}