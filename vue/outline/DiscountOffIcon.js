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
    _createElementVNode("path", { d: "m9 15 3-3m2-2 1-1M9.148 9.145A.498.498 0 0 0 9.5 10a.5.5 0 0 0 .35-.142M14.148 14.145A.498.498 0 0 0 14.5 15a.5.5 0 0 0 .35-.142" }),
    _createElementVNode("path", { d: "M5.641 5.631A9 9 0 1 0 18.36 18.369m1.68-2.318A9 9 0 0 0 7.966 3.953M3 3l18 18" })
  ]))
}