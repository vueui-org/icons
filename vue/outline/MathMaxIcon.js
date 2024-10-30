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
    _createElementVNode("path", { d: "M5 6a2 2 0 1 0 4 0 2 2 0 0 0-4 0" }),
    _createElementVNode("path", { d: "M3 15s.616-5.544 2.332-7.93M8.637 7.112C11.354 10.425 14.519 20 17 20q3 0 4-9" })
  ]))
}