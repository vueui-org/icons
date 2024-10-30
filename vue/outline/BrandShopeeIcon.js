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
    _createElementVNode("path", { d: "m4 7 .867 12.143a2 2 0 0 0 2 1.857h10.276a2 2 0 0 0 2-1.857L20.01 7h-16zM8.5 7c0-1.653 1.5-4 3.5-4s3.5 2.347 3.5 4" }),
    _createElementVNode("path", { d: "M9.5 17c.413.462 1 1 2.5 1s2.5-.897 2.5-2-1-1.5-2.5-2-2-1.47-2-2c0-1.104 1-2 2-2s1.5 0 2.5 1" })
  ]))
}