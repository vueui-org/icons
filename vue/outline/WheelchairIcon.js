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
    _createElementVNode("path", { d: "M3 16a5 5 0 1 0 10 0 5 5 0 1 0-10 0M17 19a2 2 0 1 0 4 0 2 2 0 1 0-4 0" }),
    _createElementVNode("path", { d: "M19 17a3 3 0 0 0-3-3h-3.4M3 3h1a2 2 0 0 1 2 2v6M6 8h11M15 8v6" })
  ]))
}