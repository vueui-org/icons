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
    _createElementVNode("path", { d: "M11.105 21.788a2 2 0 0 0 1.789 0l8.092-4.054c.538-.27.718-.951.385-1.452l-8.54-13.836a1 1 0 0 0-1.664 0l-8.54 13.836a1.005 1.005 0 0 0 .386 1.452zM12 2v20" })
  ]))
}