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
    _createElementVNode("path", { d: "M3 17a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zM6 20a1 1 0 0 0 1 1h3.756a1 1 0 0 0 .958-.713l1.2-3c.09-.303.133-.63-.056-.884C12.67 16.149 12.316 16 12 16h-2v-2.467a1.1 1.1 0 0 0-2.015-.61L6 16zM14 3v4a1 1 0 0 0 1 1h4" }),
    _createElementVNode("path", { d: "M5 12.1V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2h-2.3" })
  ]))
}