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
    _createElementVNode("path", { d: "M4 9h8V5.414a1 1 0 0 1 1.707-.707l6.586 6.586a1 1 0 0 1 0 1.414l-6.586 6.586A1 1 0 0 1 12 18.586V15H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1" })
  ]))
}