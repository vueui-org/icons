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
    _createElementVNode("path", { d: "M10 19a2 2 0 1 0 4 0 2 2 0 1 0-4 0M12 17V5.5M7 10v3l5 3M12 14.5l5-2V10M16 10h2V8h-2z" }),
    _createElementVNode("path", { d: "M6 9a1 1 0 1 0 2 0 1 1 0 1 0-2 0M10 5.5h4L12 3z" })
  ]))
}