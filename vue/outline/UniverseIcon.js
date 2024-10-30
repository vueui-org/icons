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
    _createElementVNode("path", { d: "M7.027 11.477a5 5 0 1 0 5.496-4.45 4.95 4.95 0 0 0-3.088.681" }),
    _createElementVNode("path", { d: "M5.636 5.636a9 9 0 1 0 3.555-2.188" }),
    _createElementVNode("path", { d: "M17 5a1 1 0 1 0 2 0 1 1 0 1 0-2 0M11 12a1 1 0 1 0 2 0 1 1 0 1 0-2 0M8 16a1 1 0 1 0 2 0 1 1 0 1 0-2 0" })
  ]))
}