const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M15 8c1.628 0 3.2.787 4.707 2.293a1 1 0 0 1-1.414 1.414c-.848-.848-1.662-1.369-2.444-1.587L15 16.064V21a1 1 0 0 1-2 0v-4h-2v4a1 1 0 0 1-2 0v-4.929l-.85-5.951c-.781.218-1.595.739-2.443 1.587a1 1 0 1 1-1.414-1.414C5.799 8.787 7.373 8 9 8zM12 1a3 3 0 1 1-3 3l.005-.176A3 3 0 0 1 12 1" })
  ]))
}