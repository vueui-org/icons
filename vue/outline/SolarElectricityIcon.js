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
    _createElementVNode("path", { d: "M4 6.28v11.44a1 1 0 0 0 1.243.97l6-1.5a1 1 0 0 0 .757-.97V7.78a1 1 0 0 0-.757-.97l-6-1.5A1 1 0 0 0 4 6.28M8 6v12M12 12H4M20 7l-3 5h4l-3 5" })
  ]))
}