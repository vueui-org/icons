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
    _createElementVNode("path", { d: "M5 21h9M10 21l-7-8 8.5-5.5" }),
    _createElementVNode("path", { d: "M13 14c-2.148-2.148-2.148-5.852 0-8 2.088-2.088 5.842-1.972 8 0z" }),
    _createElementVNode("path", { d: "m11.742 7.574-1.156-1.156a2 2 0 0 1 2.828-2.829l1.144 1.144M15.5 12l.208.274a2.527 2.527 0 0 0 3.556 0c.939-.933.98-2.42.122-3.4l-.366-.369" })
  ]))
}