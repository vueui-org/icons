const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    height: "16px",
    width: "16px"
  }, [
    _createElementVNode("path", { d: "M20 3v10a8 8 0 1 1-16 0V3l3.432 3.432A7.96 7.96 0 0 1 12 5c1.769 0 3.403.574 4.728 1.546z" }),
    _createElementVNode("path", { d: "M2 16h5l-4 4M22 16h-5l4 4M11 16a1 1 0 1 0 2 0 1 1 0 1 0-2 0M9 11v.01M15 11v.01" })
  ]))
}