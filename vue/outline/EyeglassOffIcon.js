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
    _createElementVNode("path", { d: "M5.536 5.546 3 14M16 4h2l3 10M10 16h4M19.426 19.423A3.5 3.5 0 0 1 14 16.5V14m4 0h3v2.5q0 .236-.03.463M10 16.5a3.5 3.5 0 0 1-7 0V14h7zM3 3l18 18" })
  ]))
}