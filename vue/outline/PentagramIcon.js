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
    _createElementVNode("path", { d: "M5.636 5.636a9 9 0 1 1 12.728 12.728A9 9 0 0 1 5.636 5.636" }),
    _createElementVNode("path", { d: "m15.236 11 5.264 4H14l-2 6-2-6H3.5l5.276-4L6.72 4.72 12 8.5l5.28-3.78z" })
  ]))
}