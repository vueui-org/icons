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
    _createElementVNode("path", { d: "M5 15a2 2 0 1 0 4 0 2 2 0 1 0-4 0M15 15a2 2 0 0 0 2 2m2-2a2 2 0 0 0-2-2M3 9c0 .552.895 1 2 1h5m4 0h5c1.105 0 2-.448 2-1M3 3l18 18" })
  ]))
}