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
    _createElementVNode("path", { d: "M14 8v3a1 1 0 0 0 1 1h3M18 8v8M6 8h2.5A1.5 1.5 0 0 1 10 9.5v1A1.5 1.5 0 0 1 8.5 12H7h1.5a1.5 1.5 0 0 1 1.5 1.5v1A1.5 1.5 0 0 1 8.5 16H6" })
  ]))
}