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
    _createElementVNode("path", { d: "M4 13.5a4 4 0 1 0 4 0V5a2 2 0 1 0-4 0zM4 9h4M13 16a4 4 0 1 0 0-8 4 4 0 0 0-1 .124M13 3v1M21 12h1M13 20v1M19.4 5.6l-.7.7M18.7 17.7l.7.7" })
  ]))
}