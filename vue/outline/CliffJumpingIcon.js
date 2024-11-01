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
    _createElementVNode("path", { d: "M14 7a1 1 0 1 0 2 0 1 1 0 1 0-2 0M10.5 18l2.5 2 2-2M18 21l3-3-4-2-1-5" }),
    _createElementVNode("path", { d: "m10.5 7.5 2 3 3.5.5 3-2 .5-3M4 21v-1l2-3 .5-2.5L8 12 7 7l1-3-1-1-2 .5L3 3" })
  ]))
}