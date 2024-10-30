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
    _createElementVNode("path", { d: "M9.695 12.985A5.97 5.97 0 0 0 6.4 12c-1.257 0-2.436.339-3.4 1a9 9 0 1 1 18 0c-.966-.664-2.14-1-3.4-1a6 6 0 0 0-5.605 8.144" })
  ]))
}