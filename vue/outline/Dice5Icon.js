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
    _createElementVNode("path", { d: "M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" }),
    _createElementVNode("circle", {
      cx: "8.5",
      cy: "8.5",
      r: ".5",
      fill: "currentColor"
    }),
    _createElementVNode("circle", {
      cx: "15.5",
      cy: "8.5",
      r: ".5",
      fill: "currentColor"
    }),
    _createElementVNode("circle", {
      cx: "15.5",
      cy: "15.5",
      r: ".5",
      fill: "currentColor"
    }),
    _createElementVNode("circle", {
      cx: "8.5",
      cy: "15.5",
      r: ".5",
      fill: "currentColor"
    }),
    _createElementVNode("circle", {
      cx: "12",
      cy: "12",
      r: ".5",
      fill: "currentColor"
    })
  ]))
}