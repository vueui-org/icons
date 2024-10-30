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
    _createElementVNode("path", { d: "M15 15.5 3.524 9.284A1 1 0 0 1 3 8.404V4.35a1.35 1.35 0 0 1 2.03-1.166L15 9v10.65a1.35 1.35 0 0 1-2.03 1.166l-3.474-2.027A1 1 0 0 1 9 17.926V6M15 15.5l5.504-3.21a1 1 0 0 0 .496-.864V7.85a1.35 1.35 0 0 0-2.03-1.166L15 9" })
  ]))
}