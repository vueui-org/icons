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
    _createElementVNode("path", { d: "M18 4h-6a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3M7 6a1 1 0 0 1 .993.883L8 7v10a1 1 0 0 1-1.993.117L6 17V7a1 1 0 0 1 1-1M4 7a1 1 0 0 1 .993.883L5 8v8a1 1 0 0 1-1.993.117L3 16V8a1 1 0 0 1 1-1" })
  ]))
}