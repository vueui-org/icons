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
    _createElementVNode("path", { d: "M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0" }),
    _createElementVNode("path", { d: "M17 12a5 5 0 1 0-10 0 5 5 0 0 0 10 0M12 3v4M21 12h-4M12 21v-4M3 12h4M18.364 5.636l-2.828 2.828M18.364 18.364l-2.828-2.828M5.636 18.364l2.828-2.828M5.636 5.636l2.828 2.828" })
  ]))
}