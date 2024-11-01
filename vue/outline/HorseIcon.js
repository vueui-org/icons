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
    _createElementVNode("path", { d: "m7 10-.85 8.507A1.357 1.357 0 0 0 7.5 20h.146a2 2 0 0 0 1.857-1.257l.994-2.486A2 2 0 0 1 12.354 15h1.292a2 2 0 0 1 1.857 1.257l.994 2.486A2 2 0 0 0 18.354 20h.146a1.37 1.37 0 0 0 1.364-1.494L19 9h-8c0-3-3-5-6-5l-3 6 2 2zM22 14v-2a3 3 0 0 0-3-3" })
  ]))
}