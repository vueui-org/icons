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
    _createElementVNode("path", { d: "M5.5 3a3.5 3.5 0 0 1 3.25 4.8 7 7 0 0 0-2.424 2.1A3.5 3.5 0 1 1 5.5 3M18.5 3a3.5 3.5 0 1 1-.826 6.902 7 7 0 0 0-2.424-2.103A3.5 3.5 0 0 1 18.5 3" }),
    _createElementVNode("path", { d: "M5 14a7 7 0 1 0 14 0 7 7 0 1 0-14 0" })
  ]))
}