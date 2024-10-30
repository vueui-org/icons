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
    _createElementVNode("path", { d: "M8 11a4 4 0 1 1 8 0v5H8zM8 16v3a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-3M9 4h6M12 7V4M7 4a1 1 0 1 0 2 0 1 1 0 1 0-2 0" }),
    _createElementVNode("circle", {
      cx: "12",
      cy: "4",
      r: ".5",
      fill: "currentColor"
    })
  ]))
}