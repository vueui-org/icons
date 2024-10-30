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
    _createElementVNode("path", { d: "M8 7a4 4 0 1 0 8 0 4 4 0 1 0-8 0M2.5 17a4 4 0 1 0 8 0 4 4 0 1 0-8 0M13.5 17a4 4 0 1 0 8 0 4 4 0 1 0-8 0" })
  ]))
}