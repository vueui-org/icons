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
    _createElementVNode("path", { d: "M5 9.897c0-1.714 1.46-3.104 3.26-3.104.275-1.22 1.255-2.215 2.572-2.611s2.77-.134 3.811.69c1.042.822 1.514 2.08 1.239 3.3h.693A2.42 2.42 0 0 1 19 10.586 2.42 2.42 0 0 1 16.575 13H8.26C6.46 13 5 11.61 5 9.897M12 13v3M10 18a2 2 0 1 0 4 0 2 2 0 1 0-4 0M14 18h7M3 18h7" })
  ]))
}