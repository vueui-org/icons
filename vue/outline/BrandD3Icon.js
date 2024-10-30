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
    _createElementVNode("path", { d: "M3 4h1.8C8.776 4 12 7.582 12 12s-3.224 8-7.2 8H3M12 4h5.472C19.42 4 21 5.79 21 8s-1.58 4-3.528 4M17.472 12H15M17.472 12H15.12M17.472 12C19.42 12 21 13.79 21 16s-1.58 4-3.528 4H12" })
  ]))
}