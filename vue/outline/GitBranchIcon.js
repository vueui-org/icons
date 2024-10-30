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
    _createElementVNode("path", { d: "M5 18a2 2 0 1 0 4 0 2 2 0 1 0-4 0M5 6a2 2 0 1 0 4 0 2 2 0 1 0-4 0M15 6a2 2 0 1 0 4 0 2 2 0 1 0-4 0M7 8v8M9 18h6a2 2 0 0 0 2-2v-5" }),
    _createElementVNode("path", { d: "m14 14 3-3 3 3" })
  ]))
}