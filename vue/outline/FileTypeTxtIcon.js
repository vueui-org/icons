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
    _createElementVNode("path", { d: "M14 3v4a1 1 0 0 0 1 1h4" }),
    _createElementVNode("path", { d: "M14 3v4a1 1 0 0 0 1 1h4M16.5 15h3" }),
    _createElementVNode("path", { d: "M5 12V5a2 2 0 0 1 2-2h7l5 5v4M4.5 15h3M6 15v6M18 15v6M10 15l4 6M10 21l4-6" })
  ]))
}