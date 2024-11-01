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
    _createElementVNode("path", { d: "M6 15H3v-4h3M15 15h-3v-4h3M9 15v-4" }),
    _createElementVNode("path", { d: "M15 11v7h-3M6 7v8M21 15h-3v-4h3" }),
    _createElementVNode("path", { d: "M21 11v7h-3" })
  ]))
}