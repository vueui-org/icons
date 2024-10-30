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
    _createElementVNode("path", { d: "M12 20H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1a2 2 0 0 0 2-2 1 1 0 0 1 1-1h6a1 1 0 0 1 1 1 2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v1" }),
    _createElementVNode("path", { d: "M14.477 11.307A3 3 0 1 0 12 16M17 21v-6M19 15v-1.5M19 22.5V21M17 18h3M19 18h.5a1.5 1.5 0 0 1 0 3H16" }),
    _createElementVNode("path", { d: "M19 18h.5a1.5 1.5 0 0 0 0-3H16" })
  ]))
}