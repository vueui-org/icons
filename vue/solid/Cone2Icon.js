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
    _createElementVNode("path", { d: "M12 1c5.52 0 10 1.494 10 4.002v.5a1 1 0 0 1-.121.477L13.74 20.985a2 2 0 0 1-3.489-.016l-8.13-14.99A1 1 0 0 1 2 5.504v-.5C2 2.495 6.48 1 12 1" })
  ]))
}