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
    _createElementVNode("path", { d: "M13.5 4c4.694 0 8.5 2.686 8.5 6s-3.806 6-8.5 6q-3.194 0-7.364-2.777L4 15v-3.33A46 46 0 0 1 2 10a46 46 0 0 1 2-1.67V5l2.135 1.778Q10.305 4 13.5 4" }),
    _createElementVNode("path", { d: "M10 15.5V20h6v-4" })
  ]))
}