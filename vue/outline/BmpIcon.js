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
    _createElementVNode("path", { d: "M18 16V8h2a2 2 0 1 1 0 4h-2M6 14a2 2 0 0 1-2 2H2V8h2a2 2 0 1 1 0 4H2h2a2 2 0 0 1 2 2M9 16V8l3 6 3-6v8" })
  ]))
}