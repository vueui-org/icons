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
    _createElementVNode("path", { d: "m5.931 6.936 1.275 4.249m5.607 5.609 4.251 1.275M11.683 12.317l5.759-5.759M4 5.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 1 0-3 0M17 5.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 1 0-3 0M17 18.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 1 0-3 0M4 15.5a4.5 4.5 0 1 0 9 0 4.5 4.5 0 1 0-9 0" })
  ]))
}