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
    _createElementVNode("path", { d: "M17 17v4h1a2 2 0 1 0 0-4zM17 11h1.5a1.5 1.5 0 0 0 0-3H17v5M3 5a2 2 0 1 0 4 0 2 2 0 1 0-4 0" }),
    _createElementVNode("path", { d: "M5 7v3a1 1 0 0 0 1 1h3v7a1 1 0 0 0 1 1h3M9 11h4" })
  ]))
}