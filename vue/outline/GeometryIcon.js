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
    _createElementVNode("path", { d: "m7 21 4-12m2 0 1.48 4.439m.949 2.847L17 21M10 7a2 2 0 1 0 4 0 2 2 0 1 0-4 0M4 12c1.526 2.955 4.588 5 8 5 3.41 0 6.473-2.048 8-5M12 5V3" })
  ]))
}