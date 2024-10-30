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
    _createElementVNode("path", { d: "m16 16 2-11-4 4-2-5-2 5-4-4 2 11M8 16l-1.447.724a1 1 0 0 0-.553.894V20h12v-2.382a1 1 0 0 0-.553-.894L16 16z" }),
    _createElementVNode("path", { d: "M11 4a1 1 0 1 0 2 0 1 1 0 1 0-2 0M5 5a1 1 0 1 0 2 0 1 1 0 1 0-2 0M17 5a1 1 0 1 0 2 0 1 1 0 1 0-2 0" })
  ]))
}