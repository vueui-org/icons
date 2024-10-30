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
    _createElementVNode("path", { d: "M2 17.5Q9 22 12 22c2.5 0 4-1.5 4-3.5S14.5 15 12 15q-3 0-10 2.5" }),
    _createElementVNode("path", { d: "M5 13.5Q12 11 15 11c2.5 0 4 1.5 4 3.5 0 .738-.204 1.408-.588 1.96l-2.883 3.825M22 6.5C18 3.5 14 2 12 2c-2.04 0-2.618.463-3.419 1.545M2 17.5l3-4M22 6.5l-3 4M8.581 3.545 5.628 7.256" }),
    _createElementVNode("path", { d: "M7.416 12.662C5.906 12.186 5 11.183 5 9.5 5 7 6.5 6 9 6c1.688 0 5.087 1.068 8.198 3.204A115 115 0 0 1 19 10.5l-2.302.785" })
  ]))
}