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
    _createElementVNode("path", { d: "m13 20 3.505-3.505m2-2 1.501-1.501M17 13h3V6a2 2 0 0 0-2-2H8m-3.427.6C4.218 4.96 4 5.453 4 6v12a2 2 0 0 0 2 2h7v-6c0-.272.109-.519.285-.699M3 3l18 18" })
  ]))
}