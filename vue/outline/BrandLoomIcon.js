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
    _createElementVNode("path", { d: "M17.464 6.518a6 6 0 1 0-3.023 7.965" }),
    _createElementVNode("path", { d: "M17.482 17.464a6 6 0 1 0-7.965-3.023" }),
    _createElementVNode("path", { d: "M6.54 17.482a6 6 0 1 0 3.024-7.965" }),
    _createElementVNode("path", { d: "M6.518 6.54a6 6 0 1 0 7.965 3.024" })
  ]))
}