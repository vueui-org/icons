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
    _createElementVNode("path", { d: "M10.313 6.277 12 3l5.34 10.376m2.477 6.463A19.1 19.1 0 0 1 12 21.5c-3.04 0-5.952-.714-8.5-1.983L8.934 8.958" }),
    _createElementVNode("path", { d: "M5.38 15.866a14.94 14.94 0 0 0 6.815 1.634c1.56 0 3.105-.24 4.582-.713M11 14v-.01M3 3l18 18" })
  ]))
}