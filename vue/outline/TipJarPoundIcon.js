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
    _createElementVNode("path", { d: "M17 4v1.882c0 .685.387 1.312 1 1.618s1 .933 1 1.618V18a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V9.118c0-.685.387-1.312 1-1.618s1-.933 1-1.618V4M6 4h12z" }),
    _createElementVNode("path", { d: "M14 10h-1a2 2 0 0 0-2 2v2c0 1.105-.395 2-1.5 2H14M10 13h3" })
  ]))
}