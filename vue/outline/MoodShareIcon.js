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
    _createElementVNode("path", { d: "M20.942 13.018A9 9 0 1 0 12 21M9 10h.01M15 10h.01" }),
    _createElementVNode("path", { d: "M9.5 15c.658.672 1.56 1 2.5 1q.32 0 .63-.05M16 22l5-5M21 21.5V17h-4.5" })
  ]))
}