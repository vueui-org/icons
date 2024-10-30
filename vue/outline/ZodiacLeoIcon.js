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
    _createElementVNode("path", { d: "M13 17a4 4 0 1 0 8 0M3 16a3 3 0 1 0 6 0 3 3 0 1 0-6 0M7 7a4 4 0 1 0 8 0 4 4 0 1 0-8 0" }),
    _createElementVNode("path", { d: "M7 7c0 3 2 5 2 9M15 7c0 4-2 6-2 10" })
  ]))
}