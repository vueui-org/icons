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
    _createElementVNode("path", { d: "m9 15-1-3 4-2 4 1h3.5M3 19a1 1 0 1 0 2 0 1 1 0 1 0-2 0M11 6a1 1 0 1 0 2 0 1 1 0 1 0-2 0M12 17v-7M8 20h7l1-4 4-2M18 20h3" })
  ]))
}