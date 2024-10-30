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
    _createElementVNode("path", { d: "M7 12h10M9 8h6M10 16h4M16.268 3H7.732a1.46 1.46 0 0 0-1.268.748l-4.268 7.509a1.51 1.51 0 0 0 0 1.486l4.268 7.509c.26.462.744.747 1.268.748h8.536a1.46 1.46 0 0 0 1.268-.748l4.268-7.509a1.51 1.51 0 0 0 0-1.486l-4.268-7.509A1.46 1.46 0 0 0 16.268 3" })
  ]))
}