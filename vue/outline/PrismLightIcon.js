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
    _createElementVNode("path", { d: "M4.731 19H16.27a1 1 0 0 0 .866-1.5l-5.769-10a1 1 0 0 0-1.732 0l-5.769 10a1 1 0 0 0 .865 1.5M2 13h4.45M18 5l-4.5 6M22 9l-7.75 3.25M22 15l-7-1.5" })
  ]))
}