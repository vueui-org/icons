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
    _createElementVNode("path", { d: "M4.519 20.008 21 20v-3.5a2 2 0 1 1 0-4V9H4.278" }),
    _createElementVNode("path", { d: "m21 9-9.385-4.992c-2.512.12-4.758 1.42-6.327 3.425C3.865 9.253 3 11.654 3 14.287c0 2.117.56 4.085 1.519 5.721M15 13v.01M8 13v.01M11 16v.01" })
  ]))
}