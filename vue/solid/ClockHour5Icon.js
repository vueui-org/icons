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
    _createElementVNode("path", { d: "M17 3.34A10 10 0 1 1 2 12l.005-.324A10 10 0 0 1 17 3.34M11 7v5.022l.003.054.02.135.005.025a1 1 0 0 0 .056.165l.04.082.04.065 2.004 3.007a1 1 0 1 0 1.664-1.11L13 11.697V7a1 1 0 0 0-.883-.993L12 6a1 1 0 0 0-1 1" })
  ]))
}