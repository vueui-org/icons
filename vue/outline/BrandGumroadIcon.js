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
    _createElementVNode("path", { d: "M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0" }),
    _createElementVNode("path", { d: "M13.5 13H16v3" }),
    _createElementVNode("path", { d: "M15.024 9.382A4 4 0 1 0 12 16c1.862 0 2.554-1.278 3-3" })
  ]))
}