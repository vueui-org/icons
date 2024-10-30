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
    _createElementVNode("path", { d: "m9 15 6-6" }),
    _createElementVNode("circle", {
      cx: "9.5",
      cy: "9.5",
      r: ".5",
      fill: "currentColor"
    }),
    _createElementVNode("circle", {
      cx: "14.5",
      cy: "14.5",
      r: ".5",
      fill: "currentColor"
    }),
    _createElementVNode("path", { d: "M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0" })
  ]))
}