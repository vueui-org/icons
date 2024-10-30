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
    _createElementVNode("path", { d: "M13.5 18.75c-.345.09-.727.25-1.1.25a4.3 4.3 0 0 1-1.57-.298L7 21v-3.134a2.668 2.668 0 0 1-1.795-3.773A4.8 4.8 0 0 1 8.113 5.16a5.335 5.335 0 0 1 9.194 1.078 5.333 5.333 0 0 1 4.484 6.778M22 22l-5-5M17 22l5-5" })
  ]))
}