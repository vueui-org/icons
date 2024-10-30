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
    _createElementVNode("path", { d: "M14 6a2 2 0 1 0-4 0 2 2 0 0 0 4 0M7 18a2 2 0 1 0-4 0 2 2 0 0 0 4 0M21 18a2 2 0 1 0-4 0 2 2 0 0 0 4 0M7 18h10M18 16l-5-8M11 8l-5 8" })
  ]))
}