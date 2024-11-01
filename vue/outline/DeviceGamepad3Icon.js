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
    _createElementVNode("path", { d: "M9 12 6 9H4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h2zM15 12l3-3h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-2zM12 15l-3 3v2a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-2zM12 9 9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2z" })
  ]))
}