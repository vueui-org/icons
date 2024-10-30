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
    _createElementVNode("path", { d: "m16 10 4-2-8-4-8 4 4 2" }),
    _createElementVNode("path", {
      fill: "currentColor",
      d: "m12 12-4-2-4 2 8 4 8-4-4-2z"
    }),
    _createElementVNode("path", { d: "m8 14-4 2 8 4 8-4-4-2" })
  ]))
}