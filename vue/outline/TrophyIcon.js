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
    _createElementVNode("path", { d: "M8 21h8M12 17v4M7 4h10M17 4v8a5 5 0 0 1-10 0V4M3 9a2 2 0 1 0 4 0 2 2 0 1 0-4 0M17 9a2 2 0 1 0 4 0 2 2 0 1 0-4 0" })
  ]))
}