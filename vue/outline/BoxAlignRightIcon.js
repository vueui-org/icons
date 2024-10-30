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
    _createElementVNode("path", { d: "M13.998 20.003v-16h5a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1zM8.998 20.003h.01M3.997 20.003h.011M3.997 15.002h.011M3.997 9.002h.011M3.997 4.002h.011M8.998 4.002h.01" })
  ]))
}