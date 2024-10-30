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
    _createElementVNode("path", { d: "m9 9-6 6v4h4l6-6m2-2 2.503-2.503a2.828 2.828 0 1 0-4-4l-2.497 2.497M12.5 5.5l4 4M4.5 13.5l4 4M19 15h2v2m-2 2h-6l3-3M3 3l18 18" })
  ]))
}