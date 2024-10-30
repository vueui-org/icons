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
    _createElementVNode("path", { d: "M7 3h11a1 1 0 0 1 1 1v11m0 4v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5" }),
    _createElementVNode("path", { d: "M11 17a1 1 0 1 0 2 0 1 1 0 0 0-2 0M3 3l18 18" })
  ]))
}