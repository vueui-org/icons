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
    _createElementVNode("path", { d: "M11 3h2M12 3v3M5.998 6h12.004a2 2 0 0 1 1.916 2.575l-1.8 6A2 2 0 0 1 16.202 16H7.798a2 2 0 0 1-1.916-1.425l-1.8-6A2 2 0 0 1 5.998 6" }),
    _createElementVNode("path", { d: "M8.5 6 10 16v5M15.5 6 14 16v5" })
  ]))
}