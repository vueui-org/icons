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
    _createElementVNode("path", { d: "M10 6v4M13 14h8q-2.518-3-4-3M13 6v9.958c0 .963 0 1.444-.293 1.743S11.943 18 11 18h-1M7 6v9.958c0 .963 0 1.444-.293 1.743S5.943 18 5 18H4" })
  ]))
}