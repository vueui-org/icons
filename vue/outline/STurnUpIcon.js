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
    _createElementVNode("path", { d: "M7 19a2 2 0 1 0-4 0 2 2 0 0 0 4 0" }),
    _createElementVNode("path", { d: "M5 17V7.5a3.5 3.5 0 0 1 7 0v9a3.5 3.5 0 0 0 7 0V3" }),
    _createElementVNode("path", { d: "m16 6 3-3 3 3" })
  ]))
}