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
    _createElementVNode("path", { d: "m12 15 8.385-8.415a2.1 2.1 0 0 0-2.97-2.97L9 12v3zM16 5l3 3" }),
    _createElementVNode("path", { d: "M9 7.07A7 7 0 0 0 10 21a7 7 0 0 0 6.929-6" })
  ]))
}