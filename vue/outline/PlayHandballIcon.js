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
    _createElementVNode("path", { d: "m13 21 3.5-2-4.5-4 2-4.5" }),
    _createElementVNode("path", { d: "m7 6 2 4 5 .5 4 2.5 2.5 3M4 20l5-1 1.5-2M15 7a1 1 0 1 0 2 0 1 1 0 0 0-2 0" }),
    _createElementVNode("path", {
      fill: "currentColor",
      d: "M9.5 5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"
    })
  ]))
}