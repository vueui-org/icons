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
    _createElementVNode("path", { d: "M14 14h-4v-4M10 10 6.5 6.5M9.957 5.95A3.5 3.5 0 0 0 7.04 3.04m-3.02.989A3.5 3.5 0 0 0 6 9.965M14 10l3.5-3.5M18 9.965A3.5 3.5 0 1 0 14.034 6M14 14l3.5 3.5M14.035 18a3.5 3.5 0 0 0 5.936 1.98m.987-3.026a3.5 3.5 0 0 0-2.918-2.913M10 14l-3.5 3.5M6 14.035A3.5 3.5 0 1 0 9.966 18M3 3l18 18" })
  ]))
}