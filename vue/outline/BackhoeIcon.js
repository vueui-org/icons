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
    _createElementVNode("path", { d: "M2 17a2 2 0 1 0 4 0 2 2 0 1 0-4 0M11 17a2 2 0 1 0 4 0 2 2 0 1 0-4 0M13 19H4M4 15h9" }),
    _createElementVNode("path", { d: "M8 12V7h2a3 3 0 0 1 3 3v5" }),
    _createElementVNode("path", { d: "M5 15v-2a1 1 0 0 1 1-1h7M21.12 9.88 18 5l-5 5M21.12 9.88A3 3 0 0 1 19 15a3 3 0 0 1-2.12-.88z" })
  ]))
}