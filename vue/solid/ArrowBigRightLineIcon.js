const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M12.089 3.634A2 2 0 0 0 11 5.414L10.999 8H6a1 1 0 0 0-1 1v6l.007.117A1 1 0 0 0 6 16l4.999-.001.001 2.587A2 2 0 0 0 14.414 20L21 13.414a2 2 0 0 0 0-2.828L14.414 4a2 2 0 0 0-2.18-.434zM3 8a1 1 0 0 1 .993.883L4 9v6a1 1 0 0 1-1.993.117L2 15V9a1 1 0 0 1 1-1" })
  ]))
}