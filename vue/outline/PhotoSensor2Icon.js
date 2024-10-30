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
    _createElementVNode("path", { d: "M17 5h2a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-2M7 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2M8 12a4 4 0 1 0 8 0 4 4 0 1 0-8 0" })
  ]))
}