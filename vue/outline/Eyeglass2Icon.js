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
    _createElementVNode("path", { d: "M8 4H6L3 14v2.5M16 4h2l3 10v2.5M10 16h4" }),
    _createElementVNode("path", { d: "M14 16.5a3.5 3.5 0 1 0 7 0 3.5 3.5 0 1 0-7 0M3 16.5a3.5 3.5 0 1 0 7 0 3.5 3.5 0 1 0-7 0" })
  ]))
}