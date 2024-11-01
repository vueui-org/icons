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
    _createElementVNode("path", { d: "M15 22v-2M18 22v-4M21 22v-6M19 12.494V12h2l-9-9-9 9h2v7a2 2 0 0 0 2 2h4" }),
    _createElementVNode("path", { d: "M9 21v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v.5" })
  ]))
}