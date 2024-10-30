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
    _createElementVNode("path", { d: "M11 4a1 1 0 1 0 2 0 1 1 0 1 0-2 0M4 20h4l1.5-3M17 20l-1-5h-5l1-7" }),
    _createElementVNode("path", { d: "m4 10 4-1 4-1 4 1.5 4 1.5" })
  ]))
}