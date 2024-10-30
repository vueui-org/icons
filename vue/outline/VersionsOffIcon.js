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
    _createElementVNode("path", { d: "M10.184 6.162A2 2 0 0 1 12 5h6a2 2 0 0 1 2 2v9m-1.185 2.827A2 2 0 0 1 18 19h-6a2 2 0 0 1-2-2v-7M7 7v10M4 8v8M3 3l18 18" })
  ]))
}