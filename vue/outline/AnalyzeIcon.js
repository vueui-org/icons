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
    _createElementVNode("path", { d: "M20 11a8.1 8.1 0 0 0-6.986-6.918A8.1 8.1 0 0 0 4.995 8M4 13a8.1 8.1 0 0 0 15 3" }),
    _createElementVNode("path", { d: "M18 16a1 1 0 1 0 2 0 1 1 0 1 0-2 0M4 8a1 1 0 1 0 2 0 1 1 0 1 0-2 0M9 12a3 3 0 1 0 6 0 3 3 0 1 0-6 0" })
  ]))
}