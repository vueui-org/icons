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
    _createElementVNode("path", {
      fill: "currentColor",
      d: "M12 4 4 8l8 4 8-4z"
    }),
    _createElementVNode("path", { d: "m8 14-4 2 8 4 8-4-4-2" }),
    _createElementVNode("path", { d: "m8 10-4 2 8 4 8-4-4-2" })
  ]))
}