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
    _createElementVNode("path", { d: "M7 16.17V7a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v9.171M12 7v5M10 9h4" }),
    _createElementVNode("path", { d: "M5 21v-2a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v2z" })
  ]))
}