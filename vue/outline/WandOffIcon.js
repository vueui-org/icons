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
    _createElementVNode("path", { d: "M10.5 10.5 3 18l3 3 7.5-7.5m2-2L21 6l-3-3-5.5 5.5M15 6l3 3M8.433 4.395C8.783 4.035 9 3.543 9 3a2 2 0 0 0 2 2c-.554 0-1.055.225-1.417.589M18.418 14.41c.36-.36.582-.86.582-1.41a2 2 0 0 0 2 2c-.555 0-1.056.226-1.419.59M3 3l18 18" })
  ]))
}