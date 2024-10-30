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
    _createElementVNode("path", { d: "M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0" }),
    _createElementVNode("path", { d: "M7 12a5 5 0 1 0 10 0 5 5 0 1 0-10 0" }),
    _createElementVNode("path", { d: "m8.5 20 3.5-8-6.5 6" }),
    _createElementVNode("path", { d: "M11 12a1 1 0 1 0 2 0 1 1 0 1 0-2 0" })
  ]))
}