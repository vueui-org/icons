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
    _createElementVNode("path", { d: "M4 10.005h16v-5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1zM4 15.005v-.01M4 20.005v-.01M9 20.005v-.01M15 20.005v-.01M20 20.005v-.01M20 15.005v-.01" })
  ]))
}