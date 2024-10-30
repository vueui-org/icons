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
    _createElementVNode("path", { d: "M8 7a2.64 2.64 0 0 1 2.562-2h3.376A2.64 2.64 0 0 1 16.5 7a2.57 2.57 0 0 1-1.344 2.922L9.28 12.86A3.34 3.34 0 0 0 7.5 16.5a3.11 3.11 0 0 0 3.05 2.5h2.888A2.64 2.64 0 0 0 16 17M6 10h12M6 14h12" })
  ]))
}