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
    _createElementVNode("path", { d: "M5 4C2.5 9 2.5 14 5 20M19 4c2.5 5 2.5 10 0 16M9 9h1c1 0 1 1 2.016 3.527C13 15 13 16 14 16h1" }),
    _createElementVNode("path", { d: "M8 16c1.5 0 3-2 4-3.5S14.5 9 16 9" })
  ]))
}