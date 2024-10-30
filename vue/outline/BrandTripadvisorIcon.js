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
    _createElementVNode("path", { d: "M5 13.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 1 0-3 0M16 13.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 1 0-3 0" }),
    _createElementVNode("path", { d: "M17.5 9a4.5 4.5 0 1 0 3.5 1.671L22 9zM6.5 9A4.5 4.5 0 1 1 3 10.671L2 9z" }),
    _createElementVNode("path", { d: "m10.5 15.5 1.5 2 1.5-2M9 6.75q3-1 6 0" })
  ]))
}