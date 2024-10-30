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
    _createElementVNode("path", { d: "M2 12h1M6 8H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2M6.298 6.288A1 1 0 0 0 6 7v10a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V9M9 12h3M15 15v2a1 1 0 0 0 1 1h1c.275 0 .523-.11.704-.29M18 14V7a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v4M18 8h2a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1M22 12h-1M3 3l18 18" })
  ]))
}