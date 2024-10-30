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
    _createElementVNode("path", { d: "M2 18a3 3 0 1 0 6 0 3 3 0 1 0-6 0M16 18a3 3 0 1 0 6 0 3 3 0 1 0-6 0M12 19v-4l-3-3 5-4 2 3h3M16 5a1 1 0 1 0 2 0 1 1 0 1 0-2 0" })
  ]))
}