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
    _createElementVNode("path", { d: "M3 19a2 2 0 1 0 4 0 2 2 0 0 0-4 0M19 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4M11 19h5.5a3.5 3.5 0 0 0 0-7h-8a3.5 3.5 0 0 1 0-7H13" })
  ]))
}