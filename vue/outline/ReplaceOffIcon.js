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
    _createElementVNode("path", { d: "M7 3h1a1 1 0 0 1 1 1v1m-.303 3.717A1 1 0 0 1 8 9H4a1 1 0 0 1-1-1V4c0-.28.115-.532.3-.714M19 15h1a1 1 0 0 1 1 1v1m-.303 3.717A1 1 0 0 1 20 21h-4a1 1 0 0 1-1-1v-4c0-.28.115-.532.3-.714M21 11V8a2 2 0 0 0-2-2h-6l3 3m0-6-3 3M3 13v3a2 2 0 0 0 2 2h6l-3-3m0 6 3-3M3 3l18 18" })
  ]))
}