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
    _createElementVNode("path", { d: "m7 12 5 5-1.5 1.5a3.536 3.536 0 1 1-5-5zM17 12l-5-5 1.5-1.5a3.536 3.536 0 1 1 5 5zM3 21l2.5-2.5M18.5 5.5 21 3M10 11l-2 2M13 14l-2 2" })
  ]))
}