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
    _createElementVNode("path", { d: "m4.186 16.202 3.615 5.313c.265.39.754.57 1.215.447l10.166-2.718a1.086 1.086 0 0 0 .713-1.511L12.39 2.25a.448.448 0 0 0-.787-.033L4.15 15.055a1.07 1.07 0 0 0 .037 1.147zM8.5 22 12 2" })
  ]))
}