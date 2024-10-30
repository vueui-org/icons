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
    _createElementVNode("path", { d: "m20 11-8-8-9 9h2v7a2 2 0 0 0 2 2h5" }),
    _createElementVNode("path", { d: "M9 21v-6a2 2 0 0 1 2-2h2c.325 0 .631.077.902.215M16 22s0-2 3-4" }),
    _createElementVNode("path", { d: "M19 21a3 3 0 0 1 0-6h3v3a3 3 0 0 1-3 3" })
  ]))
}