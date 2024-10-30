const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M19 5a3 3 0 0 1 3 3v8.5a3.5 3.5 0 0 1-3.5 3.5h-1.062a4 4 0 0 1-3.118-1.504l-1.54-1.92a1 1 0 0 0-1.56 0l-1.538 1.917A4 4 0 0 1 6.56 20H5.5A3.5 3.5 0 0 1 2 16.5V8a3 3 0 0 1 3-3zM8 10a2 2 0 0 0-1.995 1.85L6 12a2 2 0 1 0 2-2m8 0a2 2 0 0 0-1.995 1.85L14 12a2 2 0 1 0 2-2" })
  ]))
}