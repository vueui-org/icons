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
    _createElementVNode("path", { d: "M4 9.5a5.5 5.5 0 1 0 11 0 5.5 5.5 0 1 0-11 0" }),
    _createElementVNode("path", { d: "M9 14.5a5.5 5.5 0 1 0 11 0 5.5 5.5 0 1 0-11 0" })
  ]))
}