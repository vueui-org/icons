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
    _createElementVNode("path", { d: "M21 12h-8a1 1 0 1 0-1 1v8a9 9 0 0 0 9-9" }),
    _createElementVNode("path", { d: "M16 9a5 5 0 1 0-7 7" }),
    _createElementVNode("path", { d: "M20.486 9A9 9 0 1 0 9.004 20.495" })
  ]))
}