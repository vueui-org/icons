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
    _createElementVNode("path", { d: "M19 8H5a6 6 0 0 0 6 6h2a6 6 0 0 0 6-5.775zM17 20a2 2 0 1 1 0-4 2 2 0 0 1 0 4M15 14l1 2M9 14l-3 6M15 18H7M15 5V4M12 5V4M9 5V4" })
  ]))
}