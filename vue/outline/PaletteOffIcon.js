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
    _createElementVNode("path", { d: "M15 15h-1a2 2 0 0 0-1 3.75A1.3 1.3 0 0 1 12 21 9 9 0 0 1 5.628 5.644M8 4c1.236-.623 2.569-1 4-1 4.97 0 9 3.582 9 8 0 1.06-.474 2.078-1.318 2.828a4.5 4.5 0 0 1-1.127.73" }),
    _createElementVNode("path", { d: "M7.5 10.5a1 1 0 1 0 2 0 1 1 0 1 0-2 0M11.5 7.5a1 1 0 1 0 2 0 1 1 0 1 0-2 0M15.5 10.5a1 1 0 1 0 2 0 1 1 0 1 0-2 0M3 3l18 18" })
  ]))
}