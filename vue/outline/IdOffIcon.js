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
    _createElementVNode("path", { d: "M8 4h10a3 3 0 0 1 3 3v10m-1.437 2.561c-.455.279-.99.439-1.563.439H6a3 3 0 0 1-3-3V7c0-1.083.573-2.031 1.433-2.559" }),
    _createElementVNode("path", { d: "M8.175 8.178a2 2 0 1 0 2.646 2.65M15 8h2M16 12h1M7 16h9M3 3l18 18" })
  ]))
}