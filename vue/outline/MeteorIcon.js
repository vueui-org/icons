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
    _createElementVNode("path", { d: "m21 3-5 9h5l-6.891 7.086A6.5 6.5 0 1 1 5.254 9.58L13 3l-1 5z" }),
    _createElementVNode("path", { d: "M7 14.5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 1 0-5 0" })
  ]))
}