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
    _createElementVNode("path", { d: "M17 2a3 3 0 0 1 3 3v2a3 3 0 0 1-6 0h-1v10h1a3 3 0 0 1 6 0v2a3 3 0 0 1-6 0h-4a3 3 0 0 1-6 0v-2a3 3 0 0 1 6 0h1V7h-1a3 3 0 1 1-6 0V5a3 3 0 1 1 6 0h4a3 3 0 0 1 3-3" })
  ]))
}