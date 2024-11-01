const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    height: "16px",
    width: "16px"
  }, [
    _createElementVNode("path", { d: "M5 4v2l5 5M2.5 9.5 4 11h6M4 19v-2l6-6M19 4v2l-5 5M21.5 9.5 20 11h-6M20 19v-2l-6-6" }),
    _createElementVNode("path", { d: "M8 15a4 4 0 1 0 8 0 4 4 0 1 0-8 0" }),
    _createElementVNode("path", { d: "M10 9a2 2 0 1 0 4 0 2 2 0 1 0-4 0" })
  ]))
}