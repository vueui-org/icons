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
    _createElementVNode("path", { d: "M3.22 5.838C1.913 5.688 2 5.26 2 5.044S2.424 4 6.34 4C11.034 4 21 7.645 21 14.042s-8.71 4.931-10.435 4.52S5 16.306 5 14.388C5 12.993 8.08 12 11.715 12S17 13.041 17 14c0 .5-.074 1.229-1 1.5" }),
    _createElementVNode("path", { d: "M10.02 8a505 505 0 0 0 0 13" })
  ]))
}