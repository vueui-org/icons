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
    _createElementVNode("path", { d: "M17 20a2 2 0 1 0 4 0 2 2 0 0 0-4 0M17 20h-2M7 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0M7 4h2M14 4h-2M12 20h-2M3 20c8 0 10-16 18-16" })
  ]))
}