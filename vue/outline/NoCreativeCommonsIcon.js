const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    height: "16px",
    width: "16px"
  }, [
    _createElementVNode("path", { d: "M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0" }),
    _createElementVNode("path", { d: "M10.5 10.5a2.187 2.187 0 0 0-2.914.116 1.93 1.93 0 0 0 0 2.768 2.19 2.19 0 0 0 2.914.116M16.5 10.5a2.187 2.187 0 0 0-2.914.116 1.93 1.93 0 0 0 0 2.768 2.19 2.19 0 0 0 2.914.116M6 6l1.5 1.5M16.5 16.5 18 18" })
  ]))
}