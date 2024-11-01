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
    _createElementVNode("path", { d: "M11.5 20H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1a2 2 0 0 0 2-2 1 1 0 0 1 1-1h6a1 1 0 0 1 1 1 2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v3.5" }),
    _createElementVNode("path", { d: "M14.815 11.96a3.001 3.001 0 1 0-3.398 3.983M18.62 22c-2 0-3.62-1.58-3.62-3.53 0-1.727 1.273-3.165 2.954-3.47a3.4 3.4 0 0 0-.24 1.264c0 1.95 1.621 3.53 3.62 3.53q.342 0 .666-.06C21.479 21.06 20.162 22 18.62 22" })
  ]))
}