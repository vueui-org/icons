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
    _createElementVNode("path", { d: "m12.707 14.293 3 3A1 1 0 0 1 16 18v2a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2a1 1 0 0 1 .293-.707l3-3a1 1 0 0 1 1.414 0M6 8a1 1 0 0 1 .707.293l3 3a1 1 0 0 1 0 1.414l-3 3A1 1 0 0 1 6 16H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2zm14 0a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2a1 1 0 0 1-.707-.293l-3-3a1 1 0 0 1 0-1.414l3-3A1 1 0 0 1 18 8zm-6-6a2 2 0 0 1 2 2v2a1 1 0 0 1-.293.707l-3 3a1 1 0 0 1-1.414 0l-3-3A1 1 0 0 1 8 6V4a2 2 0 0 1 2-2z" })
  ]))
}