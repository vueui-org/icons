const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M19 4a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3zm-9 4a1 1 0 0 0-1 1v2H8V9a1 1 0 1 0-2 0v2a2 2 0 0 0 2 2h1v2a1 1 0 0 0 2 0V9a1 1 0 0 0-1-1m7.555.168a1 1 0 0 0-1.387.277L15 10.196V9a1 1 0 0 0-.883-.993L14 8a1 1 0 0 0-1 1v6a1 1 0 0 0 2 0v-1.196l1.168 1.75a1 1 0 0 0 1.286.337l.1-.059.094-.07a1 1 0 0 0 .184-1.317L16.202 12l1.63-2.445a1 1 0 0 0-.277-1.387" })
  ]))
}