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
    _createElementVNode("path", { d: "M11 7h5a1 1 0 0 1 1 1v4.5q0 .231-.04.45m-2 2.007q-.226.042-.463.043h-.5a2 2 0 0 1-2-2 2 2 0 1 0-4 0 2 2 0 0 1-2 2h-.5a2.5 2.5 0 0 1-2.5-2.5V8a1 1 0 0 1 1-1h3M10 17a2 2 0 0 0 2 2h3.5a5.5 5.5 0 0 0 2.765-.744m2-2c.47-.81.739-1.752.739-2.756V4M3 3l18 18" })
  ]))
}