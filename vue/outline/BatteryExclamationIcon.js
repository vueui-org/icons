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
    _createElementVNode("path", { d: "M9 17h8a2 2 0 0 0 2-2v-.5c0-.276.224-.5.5-.5s.5-.224.5-.5v-3c0-.276-.224-.5-.5-.5s-.5-.224-.5-.5V9a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3M5 16v3M5 22v.01" })
  ]))
}