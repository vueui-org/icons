const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0" }),
    _createElementVNode("path", { d: "M7 12a5 5 0 1 0 10 0 5 5 0 1 0-10 0M12 3v4M12 17v4M3 12h4M17 12h4M18.364 5.636l-2.828 2.828M8.464 15.536l-2.828 2.828M5.636 5.636l2.828 2.828M15.536 15.536l2.828 2.828" })
  ]))
}