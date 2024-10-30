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
    _createElementVNode("path", { d: "M12 3a7 7 0 0 1 7 7v4l-3-3M22 11l-3 3M8 15.5l-5-3 5-3 5 3V18l-5 3z" }),
    _createElementVNode("path", { d: "M3 12.5V18l5 3M8 15.545l5-3.03" })
  ]))
}