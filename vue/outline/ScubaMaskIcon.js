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
    _createElementVNode("path", { d: "M4 7h12a1 1 0 0 1 1 1v4.5a2.5 2.5 0 0 1-2.5 2.5H14a2 2 0 0 1-2-2 2 2 0 1 0-4 0 2 2 0 0 1-2 2h-.5A2.5 2.5 0 0 1 3 12.5V8a1 1 0 0 1 1-1" }),
    _createElementVNode("path", { d: "M10 17a2 2 0 0 0 2 2h3.5a5.5 5.5 0 0 0 5.5-5.5V4" })
  ]))
}