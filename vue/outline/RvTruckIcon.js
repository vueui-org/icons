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
    _createElementVNode("path", { d: "M5 17a2 2 0 1 0 4 0 2 2 0 1 0-4 0M15 17a2 2 0 1 0 4 0 2 2 0 1 0-4 0M9 17h6" }),
    _createElementVNode("path", { d: "M19 17h1a1 1 0 0 0 1-1v-4.528a2 2 0 0 0-.211-.894l-.96-1.92A3 3 0 0 0 17.146 7H6a3 3 0 0 0-3 3v6a1 1 0 0 0 1 1h1M3 12h18M15 12V7M6 5.5A1.5 1.5 0 0 1 7.5 4h7A1.5 1.5 0 0 1 16 5.5v0A1.5 1.5 0 0 1 14.5 7h-7A1.5 1.5 0 0 1 6 5.5" })
  ]))
}