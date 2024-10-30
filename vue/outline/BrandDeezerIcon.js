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
    _createElementVNode("path", { d: "M3 16.5h2v.5H3zM8 16.5h2.5v.5H8zM16 17h-2.5v-.5H16zM21.5 17H19v-.5h2.5zM21.5 13H19v.5h2.5zM21.5 9.5H19v.5h2.5zM21.5 6H19v.5h2.5zM16 13h-2.5v.5H16zM8 13.5h2.5V13H8zM8 9.5h2.5v.5H8z" })
  ]))
}