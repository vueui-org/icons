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
    _createElementVNode("path", { d: "M10 10.105A1.105 1.105 0 0 1 11.105 9h1.79A1.105 1.105 0 0 1 14 10.105v9.79A1.105 1.105 0 0 1 12.895 21h-1.79A1.105 1.105 0 0 1 10 19.895zM17 4.105A1.105 1.105 0 0 1 18.105 3h1.79A1.105 1.105 0 0 1 21 4.105v15.79A1.105 1.105 0 0 1 19.895 21h-1.79A1.105 1.105 0 0 1 17 19.895zM3 19a2 2 0 1 0 4 0 2 2 0 1 0-4 0" })
  ]))
}