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
    _createElementVNode("path", { d: "M6.66 17.52A7 7 0 0 1 3 13c2 0 3-1 3-2.51C6 6.57 8.25 3 13.38 3 18 3 21 6.51 21 11a8.08 8.08 0 0 1-3.39 6.62M10 18.69a17.3 17.3 0 0 0 3.33.3h.54" }),
    _createElementVNode("path", { d: "M14 19a2 2 0 1 0 4 0 2 2 0 1 0-4 0M6 19a2 2 0 1 0 4 0 2 2 0 1 0-4 0M16 9h.01M11 9h.01" })
  ]))
}