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
    _createElementVNode("path", { d: "M6 3a7 7 0 0 1 6.95 6.155A6.97 6.97 0 0 1 18 7h3a1 1 0 0 1 1 1v1a7 7 0 0 1-7 7h-2v4a1 1 0 0 1-2 0v-7H9a7 7 0 0 1-7-7V4a1 1 0 0 1 1-1z" })
  ]))
}