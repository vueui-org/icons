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
    _createElementVNode("path", { d: "M3 17a2 2 0 1 0 4 0 2 2 0 1 0-4 0M12 17a2 2 0 1 0 4 0 2 2 0 1 0-4 0M7 17h5" }),
    _createElementVNode("path", { d: "M3 17v-6h13v6M5 11V7h4M9 11V5h4l3 6M22 15h-3V5M16 13h3" })
  ]))
}