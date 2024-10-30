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
    _createElementVNode("path", { d: "M17 21v-6m2 0v-1.5m0 9V21m-2-3h3m-1 0h.5a1.5 1.5 0 0 1 0 3H16m3-3h.5a1.5 1.5 0 0 0 0-3H16" }),
    _createElementVNode("path", { d: "M19.5 10.5 12 3l-9 9h2v7a2 2 0 0 0 2 2h6" }),
    _createElementVNode("path", { d: "M9 21v-6a2 2 0 0 1 2-2h2c.387 0 .748.11 1.054.3M21 15h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3H17" })
  ]))
}