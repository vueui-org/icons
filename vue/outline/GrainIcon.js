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
    _createElementVNode("path", { d: "M3.5 9.5a1 1 0 1 0 2 0 1 1 0 1 0-2 0M8.5 4.5a1 1 0 1 0 2 0 1 1 0 1 0-2 0M8.5 14.5a1 1 0 1 0 2 0 1 1 0 1 0-2 0M3.5 19.5a1 1 0 1 0 2 0 1 1 0 1 0-2 0M13.5 9.5a1 1 0 1 0 2 0 1 1 0 1 0-2 0M18.5 4.5a1 1 0 1 0 2 0 1 1 0 1 0-2 0M13.5 19.5a1 1 0 1 0 2 0 1 1 0 1 0-2 0M18.5 14.5a1 1 0 1 0 2 0 1 1 0 1 0-2 0" })
  ]))
}