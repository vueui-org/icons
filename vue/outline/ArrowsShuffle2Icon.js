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
    _createElementVNode("path", { d: "m18 4 3 3-3 3M18 20l3-3-3-3" }),
    _createElementVNode("path", { d: "M3 7h3a5 5 0 0 1 5 5 5 5 0 0 0 5 5h5" }),
    _createElementVNode("path", { d: "M3 17h3a5 5 0 0 0 5-5 5 5 0 0 1 5-5h5" })
  ]))
}