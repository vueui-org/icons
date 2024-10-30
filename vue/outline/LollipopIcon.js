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
    _createElementVNode("path", { d: "M7 10a7 7 0 1 0 14 0 7 7 0 1 0-14 0" }),
    _createElementVNode("path", { d: "M21 10a3.5 3.5 0 0 0-7 0M14 10a3.5 3.5 0 0 1-7 0M14 17a3.5 3.5 0 0 0 0-7M14 3a3.5 3.5 0 0 0 0 7M3 21l6-6" })
  ]))
}