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
    _createElementVNode("path", { d: "M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" }),
    _createElementVNode("path", { d: "M17 17a2 2 0 0 1-2-2V7h-5a2 2 0 0 0-2 2" }),
    _createElementVNode("path", { d: "M7 17a2.775 2.775 0 0 0 2.632-1.897L10 14a13.4 13.4 0 0 1 3.236-5.236L15 7M10 14h5" })
  ]))
}