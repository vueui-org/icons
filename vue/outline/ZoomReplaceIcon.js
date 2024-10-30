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
    _createElementVNode("path", { d: "m21 21-6-6M3.291 8a7 7 0 0 1 5.077-4.806 7.02 7.02 0 0 1 8.242 4.403" }),
    _createElementVNode("path", { d: "M17 4v4h-4M16.705 12a7 7 0 0 1-5.074 4.798 7.02 7.02 0 0 1-8.241-4.403" }),
    _createElementVNode("path", { d: "M3 16v-4h4" })
  ]))
}