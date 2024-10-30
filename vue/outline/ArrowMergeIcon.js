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
    _createElementVNode("path", { d: "m8 7 4-4 4 4" }),
    _createElementVNode("path", { d: "M12 3v5.394A6.74 6.74 0 0 1 9 14a6.74 6.74 0 0 0-3 5.606V21M12 3v5.394A6.74 6.74 0 0 0 15 14a6.74 6.74 0 0 1 3 5.606V21" })
  ]))
}