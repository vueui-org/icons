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
    _createElementVNode("path", { d: "M7 18a2 2 0 1 0 4 0 2 2 0 0 0-4 0" }),
    _createElementVNode("path", { d: "M11 18h7a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2H8.5A5.5 5.5 0 0 0 3 12.5V16a2 2 0 0 0 2 2h2M8 7l7-3 1 3" }),
    _createElementVNode("path", { d: "M13 11.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5zM20 16h2" })
  ]))
}