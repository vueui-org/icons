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
    _createElementVNode("path", { d: "M2 18a3 3 0 1 0 6 0 3 3 0 1 0-6 0M16.437 16.44a3 3 0 0 0 4.123 4.123M22 18a3 3 0 0 0-3-3M12 19v-4l-3-3 1.665-1.332m2.215-1.772L14 8l2 3h3M16 5a1 1 0 1 0 2 0 1 1 0 1 0-2 0M3 3l18 18" })
  ]))
}