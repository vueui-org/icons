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
    _createElementVNode("path", { d: "m16 7-4-4-4 4M6 21v.01M6 18.01v.01M7 15.02v.01M10 13.03v.01" }),
    _createElementVNode("path", { d: "M12 3v5.394A6.74 6.74 0 0 0 15 14a6.74 6.74 0 0 1 3 5.606V21" })
  ]))
}