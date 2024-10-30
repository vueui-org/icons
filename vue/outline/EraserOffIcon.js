const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    height: "16px",
    width: "16px"
  }, [
    _createElementVNode("path", { d: "m3 3 18 18M19 20H8.5l-4.21-4.3a1 1 0 0 1 0-1.41l5-4.993m2.009-2.01 3-3a1 1 0 0 1 1.41 0l5 5a1 1 0 0 1 0 1.41q-2.125 2.147-2.97 3m-2.02 2.043-4.211 4.256M18 13.3 11.7 7" })
  ]))
}