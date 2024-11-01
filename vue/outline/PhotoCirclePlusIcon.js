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
    _createElementVNode("path", { d: "M15 8h.01M20.964 12.806A9 9 0 0 0 12 3a9 9 0 0 0-9 9 9 9 0 0 0 9.397 8.991" }),
    _createElementVNode("path", { d: "m4 15 4-4c.928-.893 2.072-.893 3 0l4 4" }),
    _createElementVNode("path", { d: "m14 14 1-1c.928-.893 2.072-.893 3 0M16 19.33h6M19 16.33v6" })
  ]))
}