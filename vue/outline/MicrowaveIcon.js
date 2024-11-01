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
    _createElementVNode("path", { d: "M3 7a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zM15 6v12M18 12h.01M18 15h.01M18 9h.01" }),
    _createElementVNode("path", { d: "M6.5 10.5c1-.667 1.5-.667 2.5 0 .833.347 1.667.926 2.5 0M6.5 13.5c1-.667 1.5-.667 2.5 0 .833.347 1.667.926 2.5 0" })
  ]))
}