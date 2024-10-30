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
    _createElementVNode("path", { d: "M19.03 17.818A3 3 0 0 0 21 15V7a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v8c0 1.317.85 2.436 2.03 2.84" }),
    _createElementVNode("path", { d: "M10 14a2 2 0 1 0 4 0 2 2 0 0 0-4 0M8 21a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2" })
  ]))
}