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
    _createElementVNode("path", { d: "M5.576 5.595A2 2 0 0 0 5 7v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2m0-4V7a2 2 0 0 0-2-2h-2" }),
    _createElementVNode("path", { d: "M9 5a2 2 0 0 1 2-2h2a2 2 0 1 1 0 4h-2M3 3l18 18" })
  ]))
}