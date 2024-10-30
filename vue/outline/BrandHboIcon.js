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
    _createElementVNode("path", { d: "M2 16V8M6 8v8M2 12h4M9 16h2a2 2 0 1 0 0-4H9h2a2 2 0 1 0 0-4H9zM19 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8" }),
    _createElementVNode("path", { d: "M18 12a1 1 0 1 0 2 0 1 1 0 1 0-2 0" })
  ]))
}