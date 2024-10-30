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
    _createElementVNode("path", { d: "M7.149 7.144A.498.498 0 0 0 7.5 8a.5.5 0 0 0 .341-.135" }),
    _createElementVNode("path", { d: "M3.883 3.875A3 3 0 0 0 3 6v5.172a2 2 0 0 0 .586 1.414l7.71 7.71a2.41 2.41 0 0 0 3.408 0L17.5 17.5m2.005-2.005.79-.79a2.41 2.41 0 0 0 0-3.41l-7.71-7.71A2 2 0 0 0 11.173 3H7M3 3l18 18" })
  ]))
}