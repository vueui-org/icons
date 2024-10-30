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
    _createElementVNode("path", { d: "M3 3v18h18" }),
    _createElementVNode("path", { d: "M7 15a2 2 0 1 0 4 0 2 2 0 1 0-4 0M11 5a2 2 0 1 0 4 0 2 2 0 1 0-4 0M16 12a2 2 0 1 0 4 0 2 2 0 1 0-4 0M21 3l-6 1.5M14.113 6.65l2.771 3.695M16 12.5l-5 2" })
  ]))
}