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
    _createElementVNode("path", { d: "M8 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0M8 12h12" }),
    _createElementVNode("path", { d: "M20 6H8a2 2 0 0 0-2 2v2M6 14v2a2 2 0 0 0 2 2h12" })
  ]))
}