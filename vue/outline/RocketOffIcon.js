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
    _createElementVNode("path", { d: "M9.29 9.275A9 9 0 0 0 9 10a6 6 0 0 0-5 3 8 8 0 0 1 7 7 6 6 0 0 0 3-5q.362-.128.708-.283m2.428-1.61A9 9 0 0 0 20 7a3 3 0 0 0-3-3 9 9 0 0 0-6.107 2.864" }),
    _createElementVNode("path", { d: "M7 14a6 6 0 0 0-3 6 6 6 0 0 0 6-3M14 9a1 1 0 1 0 2 0 1 1 0 1 0-2 0M3 3l18 18" })
  ]))
}