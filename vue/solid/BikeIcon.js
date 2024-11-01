const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    height: "16px",
    width: "16px"
  }, [
    _createElementVNode("path", { d: "M5 14a4 4 0 1 1-4 4l.005-.2A4 4 0 0 1 5 14M19 14a4 4 0 1 1-4 4l.005-.2A4 4 0 0 1 19 14" }),
    _createElementVNode("path", { d: "M14.832 7.445 16.535 10H19a1 1 0 0 1 .993.883L20 11a1 1 0 0 1-1 1h-3a1 1 0 0 1-.832-.445l-1.396-2.093-3.275 2.62 2.21 2.21a1 1 0 0 1 .284.577L13 15v4a1 1 0 0 1-2 0v-3.585l-2.707-2.708a1 1 0 0 1-.01-1.403l.092-.085 5-4a1 1 0 0 1 1.457.226M17 3a2 2 0 1 1-2 2l.005-.15A2 2 0 0 1 17 3" })
  ]))
}