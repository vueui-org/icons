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
    _createElementVNode("path", { d: "M4 19a2 2 0 1 0 4 0 2 2 0 0 0-4 0" }),
    _createElementVNode("path", { d: "M15 17H6V3H4" }),
    _createElementVNode("path", { d: "m6 5 14 1-.854 5.976M16.5 13H6M19 16v3M19 22v.01" })
  ]))
}