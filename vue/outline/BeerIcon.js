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
    _createElementVNode("path", { d: "M9 21h6a1 1 0 0 0 1-1v-3.625c0-1.397.29-2.775.845-4.025l.31-.7C17.711 10.4 18 9.397 18 8V4a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v4c0 1.397.29 2.4.845 3.65l.31.7A9.9 9.9 0 0 1 8 16.375V20a1 1 0 0 0 1 1M6 8h12" })
  ]))
}