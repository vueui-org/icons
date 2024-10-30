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
    _createElementVNode("path", { d: "M2 4a2 2 0 1 0 4 0 2 2 0 1 0-4 0M18 10a2 2 0 1 0 4 0 2 2 0 1 0-4 0M2 12a2 2 0 1 0 4 0 2 2 0 1 0-4 0M2 20a2 2 0 1 0 4 0 2 2 0 1 0-4 0M6 12h3a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H6" }),
    _createElementVNode("path", { d: "M6 4h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-2M14 10h4" })
  ]))
}