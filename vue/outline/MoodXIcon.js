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
    _createElementVNode("path", { d: "M20.983 12.556a9 9 0 1 0-8.433 8.427M9 10h.01M15 10h.01" }),
    _createElementVNode("path", { d: "M9.5 15c.658.64 1.56 1 2.5 1q.292 0 .574-.045M21.5 21.5l-5-5M16.5 21.5l5-5" })
  ]))
}