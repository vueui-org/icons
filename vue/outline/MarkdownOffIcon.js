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
    _createElementVNode("path", { d: "M9 5h10a2 2 0 0 1 2 2v10M19 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 1.85-2" }),
    _createElementVNode("path", { d: "M7 15V9l2 2 1-1m1 1v4M17.5 13.5l.5-.5m-2-1V9M3 3l18 18" })
  ]))
}