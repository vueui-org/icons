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
    _createElementVNode("path", { d: "M3.227 14c.917 4 4.497 7 8.773 7 4.277 0 7.858-3 8.773-7M20.78 10A9 9 0 0 0 12 3a8.985 8.985 0 0 0-8.782 7" }),
    _createElementVNode("path", { d: "M10 12a2 2 0 1 0 4 0 2 2 0 1 0-4 0" })
  ]))
}