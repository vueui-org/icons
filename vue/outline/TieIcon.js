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
    _createElementVNode("path", { d: "m12 22 4-4-2.5-11 .993-2.649A1 1 0 0 0 13.557 3h-3.114a1 1 0 0 0-.936 1.351L10.5 7 8 18z" }),
    _createElementVNode("path", { d: "M10.5 7h3l5 5.5" })
  ]))
}