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
    _createElementVNode("path", { d: "M6 20a2 2 0 1 0-4 0 2 2 0 0 0 4 0M16 4a2 2 0 1 0-4 0 2 2 0 0 0 4 0M16 20a2 2 0 1 0-4 0 2 2 0 0 0 4 0M11 12a2 2 0 1 0-4 0 2 2 0 0 0 4 0M21 12a2 2 0 1 0-4 0 2 2 0 0 0 4 0M5.058 18.306l2.88-4.606M10.061 10.303l2.877-4.604M10.065 13.705l2.876 4.6M15.063 5.7l2.881 4.61" })
  ]))
}