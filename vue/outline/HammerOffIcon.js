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
    _createElementVNode("path", { d: "M10.698 10.72 4.03 17.418a2.09 2.09 0 0 0 0 2.967 2.11 2.11 0 0 0 2.976 0l6.696-6.676M18.713 14.702l2-2a1 1 0 0 0 0-1.414l-7.586-7.586a1 1 0 0 0-1.414 0l-2 2M3 3l18 18" })
  ]))
}