const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M19 2a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zm-5 5h-4a1 1 0 0 0-1 1l.007.117A1 1 0 0 0 10 9h3v5a1 1 0 0 1-1.993.117L11 14a1 1 0 0 0-2 0 3 3 0 0 0 6 0V8a1 1 0 0 0-1-1" })
  ]))
}