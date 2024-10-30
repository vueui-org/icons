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
    _createElementVNode("path", { d: "M4 13a8 8 0 1 0 16 0 8 8 0 1 0-16 0" }),
    _createElementVNode("path", { d: "m11 5 1-2 1 2M4.512 10.161Q8.256 8.504 12 11q3.941 2.628 7.882.653M4.315 15.252Q8.157 13.438 12 16q3.439 2.292 6.878 1.081" })
  ]))
}