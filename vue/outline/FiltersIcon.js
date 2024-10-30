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
    _createElementVNode("path", { d: "M7 8a5 5 0 1 0 10 0A5 5 0 1 0 7 8" }),
    _createElementVNode("path", { d: "M8 11a5 5 0 1 0 3.998 1.997" }),
    _createElementVNode("path", { d: "M12.002 19.003A5 5 0 1 0 16 11" })
  ]))
}