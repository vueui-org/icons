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
    _createElementVNode("path", { d: "m6 8 2 2 4-4 4 4 2-2-6-6zM6 16l2-2 4 4 3.5-3.5 2 2L12 22zM20 10l2 2-2 2-2-2zM4 10l2 2-2 2-2-2zM12 10l2 2-2 2-2-2z" })
  ]))
}