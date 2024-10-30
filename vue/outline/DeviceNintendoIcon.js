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
    _createElementVNode("path", { d: "M10 20V4H7a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4zM14 20V4h3a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4z" }),
    _createElementVNode("circle", {
      cx: "17.5",
      cy: "15.5",
      r: "1",
      fill: "currentColor"
    }),
    _createElementVNode("circle", {
      cx: "6.5",
      cy: "8.5",
      r: "1",
      fill: "currentColor"
    })
  ]))
}