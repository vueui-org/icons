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
    _createElementVNode("path", { d: "M3 13a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zM12 8h2a1 1 0 0 1 1 1v2m0 4v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V9M15 11V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v12m-1 3h-4a1 1 0 0 1-1-1v-4M4 20h14M3 3l18 18" })
  ]))
}