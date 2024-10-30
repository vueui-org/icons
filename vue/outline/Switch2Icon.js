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
    _createElementVNode("path", { d: "M3 17h5l1.67-2.386m3.66-5.227L15 7h6" }),
    _createElementVNode("path", { d: "m18 4 3 3-3 3M3 7h5l7 10h6" }),
    _createElementVNode("path", { d: "m18 20 3-3-3-3" })
  ]))
}