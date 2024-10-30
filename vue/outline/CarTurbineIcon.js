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
    _createElementVNode("path", { d: "M7 13a4 4 0 1 0 8 0 4 4 0 1 0-8 0" }),
    _createElementVNode("path", { d: "M18.86 11c.088.66.14 1.512.14 2a8 8 0 1 1-8-8h6" }),
    _createElementVNode("path", { d: "M11 9q3.733.162 6 0M17 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zM11 13l-3.5-1.5M11 13l2.5 3M8.5 16l2.5-3M11 13l3.5-1.5M11 9v4" })
  ]))
}