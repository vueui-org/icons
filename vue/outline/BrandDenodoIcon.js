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
    _createElementVNode("path", { d: "M11 11h2v2h-2zM3.634 15.634l1.732-1 1 1.732-1.732 1zM11 19h2v2h-2zM18.634 14.634l1.732 1-1 1.732-1.732-1zM17.634 7.634l1.732-1 1 1.732-1.732 1zM11 3h2v2h-2zM3.634 8.366l1-1.732 1.732 1-1 1.732z" })
  ]))
}