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
    _createElementVNode("path", { d: "M2 12h2M20 7h2M4 12a2 2 0 1 0 4 0 2 2 0 1 0-4 0M16 7a2 2 0 1 0 4 0 2 2 0 1 0-4 0M20 17h2M16 17a2 2 0 1 0 4 0 2 2 0 1 0-4 0M7.5 10.5 16 7" })
  ]))
}