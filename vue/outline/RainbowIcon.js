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
    _createElementVNode("path", { d: "M22 17c0-5.523-4.477-10-10-10S2 11.477 2 17" }),
    _createElementVNode("path", { d: "M18 17a6 6 0 1 0-12 0" }),
    _createElementVNode("path", { d: "M14 17a2 2 0 1 0-4 0" })
  ]))
}