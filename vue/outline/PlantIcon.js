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
    _createElementVNode("path", { d: "M7 15h10v4a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2zM12 9a6 6 0 0 0-6-6H3v2a6 6 0 0 0 6 6h3M12 11a6 6 0 0 1 6-6h3v1a6 6 0 0 1-6 6h-3M12 15V9" })
  ]))
}