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
    _createElementVNode("path", { d: "M18 3a4 4 0 0 1 3.109 6.516l-.11.126L21 18a3 3 0 0 1-2.824 2.995L18 21H6a3 3 0 0 1-3-3V9.644l-.116-.136a4 4 0 0 1-.728-3.616l.067-.21c.532-1.525 1.93-2.58 3.601-2.677l12.079.001z" })
  ]))
}