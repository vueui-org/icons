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
    _createElementVNode("path", { d: "M11 17.5V11h.5l4 6h.5v-6.5" }),
    _createElementVNode("path", { d: "m19.077 20.071-11.53.887a1 1 0 0 1-.876-.397L4.2 17.267a1 1 0 0 1-.2-.6V5.926a1 1 0 0 1 .923-.997l11.389-.876a2 2 0 0 1 1.262.33l1.535 1.023A2 2 0 0 1 20 7.07v12.004a1 1 0 0 1-.923.997M4.5 5.5 7 8" }),
    _createElementVNode("path", { d: "M20 7 7 8v12.5" })
  ]))
}