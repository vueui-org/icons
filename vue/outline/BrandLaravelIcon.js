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
    _createElementVNode("path", { d: "m3 17 8 5 7-4v-8l-4-2.5L18 5l4 2.5v4L11 18l-4-2.5V8L3 5.5zM11 18v4M7 15.5l7-4M14 7.5v4M14 11.5l4 2.5" }),
    _createElementVNode("path", { d: "M11 13V5.5L7 3 3 5.5M7 8l4-2.5M18 10l4-2.5" })
  ]))
}