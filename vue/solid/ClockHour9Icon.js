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
    _createElementVNode("path", { d: "M17 3.34A10 10 0 1 1 2 12l.005-.324A10 10 0 0 1 17 3.34m-4.883 9.653A1 1 0 0 0 13 12V7a1 1 0 0 0-2 0v4H8.5a1 1 0 0 0-.993.883L7.5 12a1 1 0 0 0 1 1H12z" })
  ]))
}