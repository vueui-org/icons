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
    _createElementVNode("path", { d: "M2 9a10 10 0 1 0 20 0" }),
    _createElementVNode("path", { d: "M12 19A10 10 0 0 1 22 9M2 9a10 10 0 0 1 10 10" }),
    _createElementVNode("path", { d: "M12 4a9.7 9.7 0 0 1 2.99 7.5M9.01 11.5A9.7 9.7 0 0 1 12 4" })
  ]))
}