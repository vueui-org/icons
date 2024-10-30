const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M11 2a1 1 0 0 1 .993.883L12 3v2.25a1 1 0 0 1-1.993.117L10 5.25V4H8a1 1 0 0 0-.993.883L7 5v6h13a2 2 0 0 1 1.995 1.85L22 13v3c0 1.475-.638 2.8-1.654 3.715l.486.73a1 1 0 0 1-1.594 1.203l-.07-.093-.55-.823a5 5 0 0 1-1.337.26L17 21H7a5 5 0 0 1-1.619-.268l-.549.823a1 1 0 0 1-1.723-1.009l.059-.1.486-.73a4.99 4.99 0 0 1-1.647-3.457L2 16v-3a2 2 0 0 1 1.85-1.995L4 11h1V5a3 3 0 0 1 2.824-2.995L8 2z" })
  ]))
}