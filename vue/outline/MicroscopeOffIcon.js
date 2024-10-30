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
    _createElementVNode("path", { d: "M5 21h14M6 18h2M7 18v3M10 10l-1 1 3 3 1-1m2-2 3-3-3-3-3 3M10.5 12.5 9 14M17 3l3 3M12 21a6 6 0 0 0 5.457-3.505m.441-3.599a6 6 0 0 0-2.183-3.608M3 3l18 18" })
  ]))
}