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
    _createElementVNode("path", { d: "M5 21c.5-4.5 2.5-8 7-10" }),
    _createElementVNode("path", { d: "M7.5 15Q4 15 3 9a8.4 8.4 0 0 1 3.438.402 12 12 0 0 1-.052-.793C6.386 5.003 9.59 3 9.59 3s2.003 1.252 2.842 3.557Q15 5 19 5q.396 3.775-1.557 6.568C19.748 12.407 21 14.41 21 14.41S18 17 14 17c0 1 0 1 .5 3q-6 0-7-5" })
  ]))
}