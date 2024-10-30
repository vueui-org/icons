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
    _createElementVNode("path", { d: "M3 21h9M9 8h1M9 12h1M9 16h1M14 8h1M14 12h1M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v7M16 18a2 2 0 1 0 4.001-.001A2 2 0 0 0 16 18M18 14.5V16M18 20v1.5M21.032 16.25l-1.299.75M16.27 19l-1.3.75M14.97 16.25l1.3.75M19.733 19l1.3.75" })
  ]))
}