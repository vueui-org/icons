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
    _createElementVNode("path", { d: "M9 4v9a2 2 0 0 1-2 2H6a3 3 0 0 1-3-3v-1M12 5v8a1 1 0 0 0 1 1h1a2 2 0 0 0 2-2v-1M21 14v1.096a5 5 0 0 1-3.787 4.85L17 20M11 18h.01M14 18h.01" })
  ]))
}