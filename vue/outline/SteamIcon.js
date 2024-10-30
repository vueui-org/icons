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
    _createElementVNode("path", { d: "M11 4a1 1 0 1 0 2 0 1 1 0 1 0-2 0M3 12a1 1 0 1 0 2 0 1 1 0 1 0-2 0M19 12a1 1 0 1 0 2 0 1 1 0 1 0-2 0M11 20a1 1 0 1 0 2 0 1 1 0 1 0-2 0M5.5 5.5l3 3M15.5 15.5l3 3M18.5 5.5l-3 3M8.5 15.5l-3 3" })
  ]))
}