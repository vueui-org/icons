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
    _createElementVNode("path", { d: "M1.499 8h3M2.999 8v8M8.5 8A1.5 1.5 0 0 1 10 9.5v5a1.5 1.5 0 0 1-3 0v-5A1.5 1.5 0 0 1 8.5 8M13 16V8l2 5 2-5v8M20 8v8h2.5" })
  ]))
}