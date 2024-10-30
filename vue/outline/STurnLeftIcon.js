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
    _createElementVNode("path", { d: "M19 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4" }),
    _createElementVNode("path", { d: "M17 5H7.5a3.5 3.5 0 0 0 0 7h9a3.5 3.5 0 0 1 0 7H3" }),
    _createElementVNode("path", { d: "m6 16-3 3 3 3" })
  ]))
}