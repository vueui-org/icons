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
    _createElementVNode("path", { d: "M6.045 9.777a6 6 0 1 0 5.951.023" }),
    _createElementVNode("path", { d: "M11.997 20.196a6 6 0 1 0-2.948-5.97" }),
    _createElementVNode("path", { d: "M17.95 9.785Q18 9.399 18 9a6 6 0 1 0-3.056 5.23" })
  ]))
}