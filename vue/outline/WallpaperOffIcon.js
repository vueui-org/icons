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
    _createElementVNode("path", { d: "M10 6h8a2 2 0 0 1 2 2v8m-.58 3.409A2 2 0 0 1 18 20H6" }),
    _createElementVNode("path", { d: "M4 18a2 2 0 1 0 4 0 2 2 0 1 0-4 0" }),
    _createElementVNode("path", { d: "M8 18V8M4.573 4.598A2 2 0 0 0 4 6v12M3 3l18 18" })
  ]))
}