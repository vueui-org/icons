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
    _createElementVNode("path", { d: "M2 16a3 3 0 1 0 6 0 3 3 0 1 0-6 0M16 16a3 3 0 1 0 6 0 3 3 0 1 0-6 0M7.5 14h5l4-4H6m1.5 4 4-4" }),
    _createElementVNode("path", { d: "M13 6h2l1.5 3 2 4" })
  ]))
}