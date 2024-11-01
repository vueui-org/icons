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
    _createElementVNode("path", { d: "M4 19a2 2 0 1 0 4 0 2 2 0 1 0-4 0M17 17a2 2 0 1 0 2 2" }),
    _createElementVNode("path", { d: "M17 17H6V6M9.239 5.231 20 6l-1 7h-2m-4 0H6M3 3l18 18" })
  ]))
}