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
    _createElementVNode("path", { d: "M16 3.937A9 9 0 1 0 21 12" }),
    _createElementVNode("path", { d: "M11 12a1 1 0 1 0 2 0 1 1 0 1 0-2 0M19 4a1 1 0 1 0 2 0 1 1 0 1 0-2 0" }),
    _createElementVNode("path", { d: "m20 4-3.5 10-2.5 2" })
  ]))
}