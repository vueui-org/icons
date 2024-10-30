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
    _createElementVNode("path", { d: "M18.364 19.364a9 9 0 1 0-12.728 0" }),
    _createElementVNode("path", { d: "M15.536 16.536a5 5 0 1 0-7.072 0" }),
    _createElementVNode("path", { d: "M11 13a1 1 0 1 0 2 0 1 1 0 1 0-2 0" })
  ]))
}