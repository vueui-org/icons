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
    _createElementVNode("path", { d: "M3 12a3 3 0 1 0 6 0 3 3 0 1 0-6 0M15 6a3 3 0 1 0 6 0 3 3 0 1 0-6 0M15 18a3 3 0 1 0 6 0 3 3 0 1 0-6 0M8.7 10.7l6.6-3.4M8.7 13.3l6.6 3.4" })
  ]))
}