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
    _createElementVNode("path", { d: "M19.072 21H4.928A1.93 1.93 0 0 1 3 19.072v-6.857c0-.512.203-1 .566-1.365l7.07-7.063a1.93 1.93 0 0 1 2.727 0l7.071 7.063c.363.362.566.853.566 1.365v6.857A1.93 1.93 0 0 1 19.072 21" }),
    _createElementVNode("path", { d: "M7 13v4h10v-4l-5-5M14.8 5.2 3 17M7 17v4M17 17v4" })
  ]))
}