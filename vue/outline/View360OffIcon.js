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
    _createElementVNode("path", { d: "M8.335 8.388A19 19 0 0 0 8 12c0 4.97 1.79 9 4 9 1.622 0 3.018-2.172 3.646-5.294M16 12c0-4.97-1.79-9-4-9-1.035 0-1.979.885-2.689 2.337" }),
    _createElementVNode("path", { d: "M5.65 5.623a9 9 0 1 0 12.71 12.745m1.684-2.328A9 9 0 0 0 7.95 3.96" }),
    _createElementVNode("path", { d: "M8.32 8.349C5.184 8.974 3 10.374 3 12c0 2.21 4.03 4 9 4 1.286 0 2.51-.12 3.616-.336m3.059-.98C20.12 13.973 21 13.031 21 12c0-2.21-4.03-4-9-4M3 3l18 18" })
  ]))
}