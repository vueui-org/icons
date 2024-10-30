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
    _createElementVNode("path", { d: "M14 10a2 2 0 1 0-4 0 2 2 0 0 0 4 0M6 10a2 2 0 1 0-4 0 2 2 0 0 0 4 0M22 10a2 2 0 1 0-4 0 2 2 0 0 0 4 0M2 16h20M4 12v4M12 12v4M20 12v4" })
  ]))
}