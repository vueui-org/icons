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
    _createElementVNode("circle", {
      cx: "12",
      cy: "6",
      r: "1",
      fill: "currentColor"
    }),
    _createElementVNode("circle", {
      cx: "12",
      cy: "18",
      r: "1",
      fill: "currentColor"
    }),
    _createElementVNode("path", { d: "M5 12h14" })
  ]))
}