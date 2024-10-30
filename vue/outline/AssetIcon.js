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
    _createElementVNode("path", { d: "M3 15a6 6 0 1 0 12 0 6 6 0 1 0-12 0" }),
    _createElementVNode("path", { d: "M7 15a2 2 0 1 0 4 0 2 2 0 1 0-4 0M17 5a2 2 0 1 0 4 0 2 2 0 1 0-4 0M14.218 17.975l6.619-12.174M6.079 9.756l12.217-6.631" }),
    _createElementVNode("path", { d: "M7 15a2 2 0 1 0 4 0 2 2 0 1 0-4 0" })
  ]))
}