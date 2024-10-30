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
    _createElementVNode("path", { d: "M10 6a3 3 0 1 0-6 0v7h6zM14 13h6V6a3 3 0 0 0-6 0zM5 16q0 3.5 2 5 2-1.5 2-5M15 16q0 3.5 2 5 2-1.5 2-5M10 8h4M10 11h4" })
  ]))
}