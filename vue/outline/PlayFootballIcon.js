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
    _createElementVNode("path", { d: "M11 4a1 1 0 1 0 2 0 1 1 0 0 0-2 0M3 17l5 1 .75-1.5M14 21v-4l-4-3 1-6" }),
    _createElementVNode("path", { d: "M6 12V9l5-1 3 3 3 1" }),
    _createElementVNode("path", {
      fill: "currentColor",
      d: "M19.5 20a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"
    })
  ]))
}