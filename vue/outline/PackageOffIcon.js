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
    _createElementVNode("path", { d: "M8.812 4.793 12 3l8 4.5V16m-2.282 1.784L12 21l-8-4.5v-9l2.223-1.25M14.543 10.57 20 7.5M12 12v9M12 12 4 7.5M16 5.25l-4.35 2.447M9.086 9.139 8 9.75M3 3l18 18" })
  ]))
}