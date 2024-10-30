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
    _createElementVNode("path", { d: "M16 6a2 2 0 1 0 4 0 2 2 0 1 0-4 0M4 12a2 2 0 1 0 4 0 2 2 0 1 0-4 0M4 18a2 2 0 1 0 4 0 2 2 0 1 0-4 0M16 18a2 2 0 1 0 4 0 2 2 0 1 0-4 0M8 18h8M18 20v1M18 3v1M6 20v1M6 10V3M12 3v18M18 8v8M8 12h13M21 6h-1M16 6H3M3 12h1M20 18h1M3 18h1M6 14v2" })
  ]))
}