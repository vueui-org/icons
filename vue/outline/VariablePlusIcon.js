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
    _createElementVNode("path", { d: "M5 4C2.5 9 2.5 14 5 20M19 4c1.38 2.76 2 5.52 1.855 8.448M9 9h1c1 0 1 1 2.016 3.527.785 1.972.944 3.008 1.483 3.346" }),
    _createElementVNode("path", { d: "M8 16c1.5 0 3-2 4-3.5S14.5 9 16 9M16 19h6M19 16v6" })
  ]))
}