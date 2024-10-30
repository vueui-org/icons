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
    _createElementVNode("path", { d: "M20.984 12.536a9 9 0 1 0-8.463 8.449M19 22v-6M22 19l-3-3-3 3M9 10h.01M15 10h.01" }),
    _createElementVNode("path", { d: "M9.5 15c.658.64 1.56 1 2.5 1s1.842-.36 2.5-1" })
  ]))
}