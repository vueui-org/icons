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
    _createElementVNode("path", { d: "M22 12h-2M2 9h4M2 15h4M5 19q2.667-7 0-14M8 5c10.667 2.1 10.667 12.6 0 14q2.709-7 0-14" }),
    _createElementVNode("path", { d: "M16 12a2 2 0 1 0 4 0 2 2 0 1 0-4 0" })
  ]))
}