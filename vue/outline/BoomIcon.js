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
    _createElementVNode("path", { d: "M3 9.662C5 12 5 14 3 16c3 .5 4.5 1 5 4 2-3 6-4 9 0 0-3 1-4 4-4.004Q18 13.001 21 10c-3 0-5-2-5-5-2 4-5 3-7.5-1C8 7 6 9 3 9.662" })
  ]))
}