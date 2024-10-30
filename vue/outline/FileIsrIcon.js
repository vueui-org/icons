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
    _createElementVNode("path", { d: "M15 3v4a1 1 0 0 0 1 1h4" }),
    _createElementVNode("path", { d: "M15 3v4a1 1 0 0 0 1 1h4" }),
    _createElementVNode("path", { d: "M6 8V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-7" }),
    _createElementVNode("path", { d: "m3 15 3-3 3 3" })
  ]))
}