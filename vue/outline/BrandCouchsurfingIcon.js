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
    _createElementVNode("path", { d: "M3.1 13q4.9 0 7.9-.5c3-.5 4-2 4-3.5a3 3 0 1 0-6 0c0 1.554 1.807 3 3 4s2 2.5 2 3.5a1.5 1.5 0 1 1-3 0c0-2 4-3.5 7-3.5h2.9" }),
    _createElementVNode("path", { d: "M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0" })
  ]))
}