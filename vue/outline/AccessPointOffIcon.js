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
    _createElementVNode("path", { d: "m3 3 18 18M14.828 9.172A4 4 0 0 1 16 12M17.657 6.343a8 8 0 0 1 1.635 8.952M9.168 14.828a4 4 0 0 1 0-5.656M6.337 17.657a8 8 0 0 1 0-11.314" })
  ]))
}