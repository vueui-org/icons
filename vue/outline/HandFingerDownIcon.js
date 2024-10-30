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
    _createElementVNode("path", { d: "M8 12v8.5a1.5 1.5 0 0 0 3 0V13M11 13.5v2a1.5 1.5 0 0 0 3 0V13M14 14.5a1.5 1.5 0 0 0 3 0V13" }),
    _createElementVNode("path", { d: "M17 13.5a1.5 1.5 0 0 0 3 0V9a6 6 0 0 0-6-6h-2 .208a6 6 0 0 0-5.012 2.7L7 6q-.468.718-3.286 5.728a1.5 1.5 0 0 0 .536 2.022c.734.44 1.674.325 2.28-.28L8 12" })
  ]))
}