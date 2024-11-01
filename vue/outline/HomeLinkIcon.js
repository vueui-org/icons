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
    _createElementVNode("path", { d: "M20.085 11.085 12 3l-9 9h2v7a2 2 0 0 0 2 2h4.5" }),
    _createElementVNode("path", { d: "M9 21v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 1.807 1.143M20 21a1 1 0 1 0 2 0 1 1 0 1 0-2 0M20 16a1 1 0 1 0 2 0 1 1 0 1 0-2 0M15 19a1 1 0 1 0 2 0 1 1 0 1 0-2 0" }),
    _createElementVNode("path", { d: "m21 16-5 3 5 2" })
  ]))
}