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
    _createElementVNode("path", { d: "M10 3.2A9 9 0 1 0 20.8 14a1 1 0 0 0-1-1H13a2 2 0 0 1-2-2V4a.9.9 0 0 0-1-.8" }),
    _createElementVNode("path", { d: "M15 3.5A9 9 0 0 1 20.5 9H16a1 1 0 0 1-1-1z" })
  ]))
}