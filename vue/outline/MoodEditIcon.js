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
    _createElementVNode("path", { d: "M20.955 11.104a9 9 0 1 0-9.895 9.847M9 10h.01M15 10h.01" }),
    _createElementVNode("path", { d: "M9.5 15c.658.672 1.56 1 2.5 1q.189 0 .376-.018M18.42 15.61a2.1 2.1 0 0 1 2.97 2.97L18 22h-3v-3z" })
  ]))
}