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
    _createElementVNode("path", { d: "M9 21v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2" }),
    _createElementVNode("path", { d: "M19 12h2l-9-9-9 9h2v7a2 2 0 0 0 2 2h5.5M16 19h6M19 16l3 3-3 3" })
  ]))
}