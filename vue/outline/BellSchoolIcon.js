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
    _createElementVNode("path", { d: "M4 10a6 6 0 1 0 12 0 6 6 0 1 0-12 0" }),
    _createElementVNode("path", { d: "M13.5 15h.5a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2h.5M16 17a5.698 5.698 0 0 0 4.467-7.932L20 8M10 10v.01" }),
    _createElementVNode("path", { d: "M19 8a1 1 0 1 0 2 0 1 1 0 1 0-2 0" })
  ]))
}