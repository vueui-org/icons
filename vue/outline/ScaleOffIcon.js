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
    _createElementVNode("path", { d: "M7 20h10M9.452 5.425 12 5l6 1M12 3v5m0 4v8M9 12 6 6l-3 6a3 3 0 0 0 6 0M18.873 14.871A3 3 0 0 0 21 12l-3-6-2.677 5.355M3 3l18 18" })
  ]))
}