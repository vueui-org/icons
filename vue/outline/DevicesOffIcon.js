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
    _createElementVNode("path", { d: "M13 9a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v8m-1 3h-6a1 1 0 0 1-1-1v-6M18 8V5a1 1 0 0 0-1-1H8M4 4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h9M16 9h2M3 3l18 18" })
  ]))
}