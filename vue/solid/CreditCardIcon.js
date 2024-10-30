const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M22 10v6a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4v-6zM7.01 14H7a1 1 0 1 0 .01 2 1 1 0 0 0 0-2M13 14h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2m5-10a4 4 0 0 1 4 4H2a4 4 0 0 1 4-4z" })
  ]))
}