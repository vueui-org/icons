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
    _createElementVNode("path", { d: "M9.5 11h.01M9.5 15a3.5 3.5 0 0 0 5 0" }),
    _createElementVNode("path", { d: "M8 4V3h8v2h1a3 3 0 0 1 3 3v8m-.884 3.127A3 3 0 0 1 17 20v1H7v-1a3 3 0 0 1-3-3V8c0-1.083.574-2.032 1.435-2.56M3 3l18 18" })
  ]))
}