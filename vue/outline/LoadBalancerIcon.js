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
    _createElementVNode("path", { d: "M9 13a3 3 0 1 0 6 0 3 3 0 1 0-6 0M11 20a1 1 0 1 0 2 0 1 1 0 1 0-2 0M12 16v3M12 10V3M9 6l3-3 3 3M12 10V3" }),
    _createElementVNode("path", { d: "m9 6 3-3 3 3M14.894 12.227l6.11-2.224M17.159 8.21l3.845 1.793-1.793 3.845M9.101 12.214l-6.075-2.211M6.871 8.21l-3.845 1.793 1.793 3.845" })
  ]))
}