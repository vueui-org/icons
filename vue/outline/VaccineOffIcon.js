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
    _createElementVNode("path", { d: "m17 3 4 4M19 5l-4.5 4.5M11.5 6.5l6 6M16.5 11.5l-.5.5m-2 2-4 4H6v-4l4-4m2-2 .5-.5M7.5 12.5 9 14M3 21l3-3M3 3l18 18" })
  ]))
}