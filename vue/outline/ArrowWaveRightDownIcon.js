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
    _createElementVNode("path", { d: "M17 14h4v-4" }),
    _createElementVNode("path", { d: "M3 12c.887 1.284 2.48 2.033 4 2 1.52.033 3.113-.716 4-2s2.48-2.033 4-2c1.52-.033 3 1 4 2l2 2" })
  ]))
}