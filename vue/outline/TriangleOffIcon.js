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
    _createElementVNode("path", { d: "m7.825 7.83-5.568 9.295a1.914 1.914 0 0 0 1.636 2.871H20m1.998-1.99a1.9 1.9 0 0 0-.255-.88L13.637 3.59a1.914 1.914 0 0 0-3.274 0L9.335 5.308M3 3l18 18" })
  ]))
}