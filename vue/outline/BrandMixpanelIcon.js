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
    _createElementVNode("path", { d: "M2 12a2.5 2.5 0 1 0 5 0 2.5 2.5 0 1 0-5 0M19 12a1.5 1.5 0 1 0 3 0 1.5 1.5 0 1 0-3 0M11 12a2 2 0 1 0 4 0 2 2 0 1 0-4 0" })
  ]))
}