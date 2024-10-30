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
    _createElementVNode("path", { d: "M9 11a3 3 0 1 0 6 0 3 3 0 0 0-6 0" }),
    _createElementVNode("path", { d: "M11.85 21.48a2 2 0 0 1-1.263-.58l-4.244-4.243a8 8 0 1 1 13.385-3.585M20 21l2-2-2-2M17 17l-2 2 2 2" })
  ]))
}