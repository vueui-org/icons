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
    _createElementVNode("path", { d: "M2 9c0 5.523 4.477 10 10 10a9.95 9.95 0 0 0 5.418-1.593m2.137-1.855A9.96 9.96 0 0 0 22 9" }),
    _createElementVNode("path", { d: "M12 19c0-1.988.58-3.84 1.58-5.397m1.878-2.167A9.96 9.96 0 0 1 22 9M2 9a10 10 0 0 1 10 10M12 4a9.7 9.7 0 0 1 3 7.013" }),
    _createElementVNode("path", { d: "M9.01 11.5a9.7 9.7 0 0 1 .163-2.318m1.082-2.942A9.7 9.7 0 0 1 12 4M3 3l18 18" })
  ]))
}