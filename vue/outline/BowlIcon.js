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
    _createElementVNode("path", { d: "M4 8h16a1 1 0 0 1 1 1v.5c0 1.5-2.517 5.573-4 6.5v1a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-1c-1.687-1.054-4-5-4-6.5V9a1 1 0 0 1 1-1" })
  ]))
}