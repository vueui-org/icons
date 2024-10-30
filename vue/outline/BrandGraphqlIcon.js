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
    _createElementVNode("path", { d: "m4 8 8-5 8 5v8l-8 5-8-5z" }),
    _createElementVNode("path", { d: "m12 4 7.5 12h-15z" }),
    _createElementVNode("path", { d: "M11 3a1 1 0 1 0 2 0 1 1 0 0 0-2 0M11 21a1 1 0 1 0 2 0 1 1 0 0 0-2 0M3 8a1 1 0 1 0 2 0 1 1 0 0 0-2 0M3 16a1 1 0 1 0 2 0 1 1 0 0 0-2 0M19 16a1 1 0 1 0 2 0 1 1 0 0 0-2 0M19 8a1 1 0 1 0 2 0 1 1 0 0 0-2 0" })
  ]))
}