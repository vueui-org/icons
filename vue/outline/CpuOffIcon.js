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
    _createElementVNode("path", { d: "M9 5h9a1 1 0 0 1 1 1v9m-.292 3.706A1 1 0 0 1 18 19H6a1 1 0 0 1-1-1V6c0-.272.108-.518.284-.698" }),
    _createElementVNode("path", { d: "M13 9h2v2m0 4H9V9M3 10h2M3 14h2M10 3v2M14 3v2M21 10h-2M21 14h-2M14 21v-2M10 21v-2M3 3l18 18" })
  ]))
}