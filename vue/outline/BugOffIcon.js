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
    _createElementVNode("path", { d: "M9.884 5.873A3 3 0 0 1 15 8v1M13 9h3a6 6 0 0 1 1 3v1m-.298 3.705A5 5 0 0 1 7 15v-3a6 6 0 0 1 1-3h1M3 13h4M17 13h4M12 20v-6M4 19l3.35-2M4 7l3.75 2.4M20 7l-3.75 2.4M3 3l18 18" })
  ]))
}