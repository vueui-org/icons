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
    _createElementVNode("path", { d: "M12 12a3 3 0 1 0 6 0 3 3 0 1 0-6 0" }),
    _createElementVNode("path", { d: "M6 6a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v0a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3" }),
    _createElementVNode("path", { d: "M9 9a3 3 0 0 0 0 6h3m-3 0a3 3 0 1 0 3 3V3" })
  ]))
}