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
    _createElementVNode("path", { d: "M14 10h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3H10M12 9v1M12 16v1" }),
    _createElementVNode("path", { d: "M17 4v1.882c0 .685.387 1.312 1 1.618s1 .933 1 1.618V18a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V9.118c0-.685.387-1.312 1-1.618s1-.933 1-1.618V4M6 4h12z" })
  ]))
}