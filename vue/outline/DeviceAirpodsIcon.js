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
    _createElementVNode("path", { d: "M6 4a4 4 0 0 1 4 3.8v10.7a1.5 1.5 0 0 1-3 0V12H6a4 4 0 0 1-4-3.8V8a4 4 0 0 1 4-4M18 4a4 4 0 0 0-4 3.8v10.7a1.5 1.5 0 0 0 3 0V12h1a4 4 0 0 0 4-3.8V8a4 4 0 0 0-4-4" })
  ]))
}