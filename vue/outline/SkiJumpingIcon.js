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
    _createElementVNode("path", { d: "M11 3a1 1 0 1 0 2 0 1 1 0 0 0-2 0M17 17.5 12 13V7l5 4M7 17.5l5-4.5" }),
    _createElementVNode("path", { d: "m15.103 21.58 6.762-14.502a2 2 0 0 0-.968-2.657M8.897 21.58 2.135 7.077a2 2 0 0 1 .968-2.657M7 11l5-4" })
  ]))
}