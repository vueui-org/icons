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
    _createElementVNode("path", { d: "M8 4a2 2 0 0 1 2 2M8.838 8.816A2 2 0 0 1 8 9H6a2 2 0 0 1-2-2V6c0-.549.221-1.046.58-1.407M4 15a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zM14 10V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v10m-.595 3.423A2 2 0 0 1 18 20h-2a2 2 0 0 1-2-2v-4M3 3l18 18" })
  ]))
}