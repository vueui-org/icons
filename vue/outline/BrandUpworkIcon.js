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
    _createElementVNode("path", { d: "M3 7v5a3 3 0 0 0 6 0V7h1l4 6c.824 1.319 1.945 2 3.5 2a3.5 3.5 0 0 0 0-7c-2.027 0-3.137 1-3.5 3-.242 1.33-.908 4-2 8" })
  ]))
}