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
    _createElementVNode("path", { d: "M14 13h6M4 12c0-9.296 9.5-9 9.5-9C10.692 3 9 7.373 9 12s1.763 8.976 4.572 8.976C13.572 20.999 4 22.068 4 12M14.5 3c1.416 0 3.853 1.16 4.5 2v3.5M15 13v8s2.77-.37 4-2v-6M13.5 21H15M13.5 3h1" })
  ]))
}