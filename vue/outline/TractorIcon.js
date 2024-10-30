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
    _createElementVNode("path", { d: "M3 15a4 4 0 1 0 8 0 4 4 0 1 0-8 0M7 15v.01M17 17a2 2 0 1 0 4 0 2 2 0 1 0-4 0M10.5 17H17" }),
    _createElementVNode("path", { d: "M20 15.2V11a1 1 0 0 0-1-1h-6l-2-5H5v6.5" }),
    _createElementVNode("path", { d: "M18 5h-1a1 1 0 0 0-1 1v4" })
  ]))
}