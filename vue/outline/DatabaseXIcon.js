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
    _createElementVNode("path", { d: "M4 6c0 1.657 3.582 3 8 3s8-1.343 8-3-3.582-3-8-3-8 1.343-8 3" }),
    _createElementVNode("path", { d: "M4 6v6c0 1.657 3.582 3 8 3q.807 0 1.57-.058M20 13.5V6" }),
    _createElementVNode("path", { d: "M4 12v6c0 1.657 3.582 3 8 3q.577 0 1.132-.03M22 22l-5-5M17 22l5-5" })
  ]))
}