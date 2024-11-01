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
    _createElementVNode("path", { d: "M3 6a2 2 0 1 0 4 0 2 2 0 1 0-4 0M10 6a2 2 0 1 0 4 0 2 2 0 1 0-4 0M17 6a2 2 0 1 0 4 0 2 2 0 1 0-4 0M3 18a2 2 0 1 0 4 0 2 2 0 1 0-4 0M10 18a2 2 0 1 0 4 0 2 2 0 1 0-4 0M5 8v8M12 8v8" }),
    _createElementVNode("path", { d: "M19 8v2a2 2 0 0 1-2 2H5" })
  ]))
}