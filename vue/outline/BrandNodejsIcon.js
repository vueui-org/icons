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
    _createElementVNode("path", { d: "M9 9v8.044a2 2 0 0 1-2.996 1.734l-1.568-.9A3 3 0 0 1 3 15.317V8.682a3 3 0 0 1 1.436-2.56l6-3.667a3 3 0 0 1 3.128 0l6 3.667A3 3 0 0 1 21 8.683v6.634a3 3 0 0 1-1.436 2.56l-6 3.667a3 3 0 0 1-3.128 0" }),
    _createElementVNode("path", { d: "M17 9h-3.5a1.5 1.5 0 0 0 0 3h2a1.5 1.5 0 0 1 0 3H12" })
  ]))
}